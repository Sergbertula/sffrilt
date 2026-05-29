import { Send, Mail, Phone, Clock, MapPin, Zap, Copy } from "lucide-react";
import { toast } from "sonner";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const channels = [
  {
    icon: Send,
    title: "Telegram",
    value: "@tehprom1",
    href: "https://t.me/tehprom1",
    note: "Быстрее всего — ответим в течение часа",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: "tehprom-tula@mail.ru",
    href: "mailto:tehprom-tula@mail.ru",
    note: "Для брифов и коммерческих предложений",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (953) 421-02-56",
    href: "tel:+79534210256",
    note: "Звонки по будням, 10:00–19:00 МСК",
  },
];

const facts = [
  { icon: Clock, title: "Часы работы", value: "Пн–Пт, 10:00–19:00 МСК" },
  { icon: Zap, title: "Среднее время ответа", value: "до 1 часа в рабочее время" },
  { icon: MapPin, title: "Где работаем", value: "Удалённо по всей России и СНГ" },
];

export function ContactInfo() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Способы связи"
          title="Где нас найти"
          description="Выберите удобный канал — отвечаем во всех."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="group block"
              onClick={() => {
                if (c.title === "Email") {
                  navigator.clipboard.writeText(c.value);
                  toast.success("Email скопирован!");
                }
              }}
            >
              <GlassCard
                className={
                  c.primary
                    ? "h-full ring-2 ring-primary/40 shadow-[0_30px_80px_-30px_oklch(0.7_0.2_245/0.4)]"
                    : "h-full"
                }
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 font-display text-xl font-bold text-gradient">{c.value}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.note}</p>
              </GlassCard>
            </a>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {facts.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-2xl glass p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <f.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {f.title}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
