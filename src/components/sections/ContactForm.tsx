import { useMemo, useState } from "react";
import { Phone, Mail, Send, Check, ArrowRight, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";
import { toast } from "sonner";
import { ymReachGoal, handleYMClick } from "@/lib/metrika";

const phoneRe = /^\+?[0-9\s\-()]{10,20}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = Partial<Record<"name" | "contact" | "task", string>>;

function validate(form: { name: string; contact: string; task: string }): Errors {
  const e: Errors = {};
  if (form.name.trim().length < 2) e.name = "Минимум 2 символа";
  const c = form.contact.trim();
  if (!c) e.contact = "Укажите телефон или email";
  else if (!phoneRe.test(c) && !emailRe.test(c))
    e.contact = "Введите телефон (+7…) или email";
  if (form.task.trim().length < 10) e.task = "Минимум 10 символов";
  return e;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", task: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0 && consent;

  function reset() {
    setForm({ name: "", contact: "", task: "" });
    setConsent(false);
    setTouched({});
    setSubmitted(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, contact: true, task: true });
    if (!isValid) return;
    setLoading(true);
    try {
      const source =
        typeof window !== "undefined"
          ? window.location.pathname + window.location.search
          : null;
      const payload = {
        name: form.name.trim().slice(0, 200),
        contact: form.contact.trim().slice(0, 200),
        task: form.task.trim().slice(0, 4000),
        source,
      };
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Ошибка отправки");
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      toast.error("Не удалось отправить заявку. Напишите нам в Telegram — ответим быстрее.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Контакты"
          title="Оставить заявку"
          description="Расскажите о задаче — предложим решение под ваш бизнес."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl glass-strong p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[var(--gradient-glow)] blur-3xl" />
              {submitted ? (
                <div className="relative flex flex-col items-center py-10 text-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "oklch(0.7 0.18 145)" }}
                  >
                    <Check className="h-7 w-7 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Заявка принята!
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Свяжемся с вами в течение 2 часов в рабочее время. Обычно отвечаем быстрее.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://t.me/tehprom1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform"
                    >
                      <Send className="h-4 w-4" />
                      Написать в Telegram
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-background transition-colors"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-4" noValidate>
                  <Field
                    label="Имя или организация"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    placeholder="ООО «Пример» / Иван"
                    error={touched.name ? errors.name : undefined}
                  />
                  <Field
                    label="Телефон или E-mail"
                    value={form.contact}
                    onChange={(v) => setForm({ ...form, contact: v })}
                    onBlur={() => setTouched((t) => ({ ...t, contact: true }))}
                    placeholder="+7 (___) ___-__-__ или name@email.com"
                    error={touched.contact ? errors.contact : undefined}
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Опишите задачу или вопрос
                    </label>
                    <textarea
                      value={form.task}
                      onChange={(e) => setForm({ ...form, task: e.target.value })}
                      onBlur={() => setTouched((t) => ({ ...t, task: true }))}
                      rows={4}
                      placeholder="Что нужно автоматизировать, какие интеграции, сроки…"
                      className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
                        touched.task && errors.task
                          ? "border-destructive/70 focus:ring-destructive/30"
                          : "border-border focus:border-primary/50 focus:ring-primary/30"
                      }`}
                    />
                    {touched.task && errors.task && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.task}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !isValid}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed disabled:bg-none disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
                    />
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      Я согласен с{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>{" "}
                      и принимаю её условия.
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>

          <aside className="space-y-3 lg:col-span-2">
            <ContactItem
              icon={Phone}
              label="Телефон"
              value="+7 (953) 421-02-56"
              href="tel:+79534210256"
            />
            <ContactItem
              icon={Send}
              label="Telegram"
              value="@tehprom1"
              href="https://t.me/tehprom1"
            />
            <ContactItem
              icon={Mail}
              label="E-mail"
              value="tehprom-tula@mail.ru"
              href="mailto:tehprom-tula@mail.ru"
            />
            <ContactItem
              icon={Send}
              label="MAX"
              value="@tehprom"
              href="https://max.ru/tehprom"
            />
            <ContactItem
              icon={Send}
              label="Instagram"
              value="@tehpromtula"
              href="https://instagram.com/tehpromtula"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${
          error
            ? "border-destructive/70 focus:ring-destructive/30"
            : "border-border focus:border-primary/50 focus:ring-primary/30"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:border-primary/40"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </a>
  );
}
