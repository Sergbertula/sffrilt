import { useState } from "react";
import { Phone, Mail, Send, Check, ArrowRight, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";
import { toast } from "sonner";
import { notifyLead } from "@/lib/telegram.functions";
import { useServerFn } from "@tanstack/react-start";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", task: "" });
  const sendLeadNotification = useServerFn(notifyLead);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !consent) return;
    setLoading(true);
    try {
      const source =
        typeof window !== "undefined"
          ? window.location.pathname + window.location.search
          : null;
      const payload = {
        name: form.name.trim().slice(0, 200),
        contact: form.contact.trim().slice(0, 200),
        task: form.task.trim() ? form.task.trim().slice(0, 4000) : null,
        source,
      };
      console.log("[ContactForm] submitting lead", payload);
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("[ContactForm] API error", res.status, err);
        throw new Error(err.error || "Ошибка отправки");
      }
      console.log("[ContactForm] submit ok, calling notifyLead");
      setSubmitted(true);
      sendLeadNotification({ data: payload })
        .then((res) => console.log("[ContactForm] notifyLead result", res))
        .catch((err) => console.error("[ContactForm] notifyLead failed", err));
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary glow-blue">
                    <Check className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                    Спасибо!
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="relative space-y-4">
                  <Field
                    label="Имя или организация"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="ООО «Пример» / Иван"
                    required
                  />
                  <Field
                    label="Телефон или E-mail"
                    value={form.contact}
                    onChange={(v) => setForm({ ...form, contact: v })}
                    placeholder="+7 (___) ___-__-__ или name@email.com"
                    required
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Опишите задачу или вопрос
                    </label>
                    <textarea
                      value={form.task}
                      onChange={(e) => setForm({ ...form, task: e.target.value })}
                      rows={4}
                      placeholder="Что нужно автоматизировать, какие интеграции, сроки…"
                      className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !consent}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed sm:w-auto"
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
                      required
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
            <div className="rounded-2xl glass p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">MAX</p>
              <p className="mt-1 text-sm font-medium text-foreground">Скоро подключим</p>
            </div>
            <div className="rounded-2xl glass p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</p>
              <p className="mt-1 text-sm font-medium text-foreground">Скоро запускаем</p>
            </div>
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
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
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
