import { Eye, Gauge, Handshake, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const points = [
  {
    icon: Gauge,
    title: "Запускаем за недели, а не месяцы",
    desc: "Первый рабочий результат в 2–4 недели. Не пилим бесконечный proof-of-concept.",
  },
  {
    icon: Eye,
    title: "Прозрачный процесс",
    desc: "Демо каждую неделю, отчёт в Notion, доступ к таск-трекеру. Вы всегда знаете, на каком этапе проект.",
  },
  {
    icon: Handshake,
    title: "Фикс-цена и фикс-сроки",
    desc: "После брифинга присылаем смету и план. Не вылезаем из бюджета — берём риск переделок на себя.",
  },
  {
    icon: Layers,
    title: "Под ключ — без подрядчиков",
    desc: "Дизайн, бэкенд, фронт, AI, DevOps, поддержка — всё внутри команды. Один контакт, одна ответственность.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасность и приватность",
    desc: "On-premise модели, ФЗ-152, бэкапы и мониторинг 24/7. Работаем с медициной, финансами, госсектором.",
  },
  {
    icon: Sparkles,
    title: "Современный стек",
    desc: "GPT-4o, Claude 3.5, Llama, Next.js, TanStack, Supabase, Cloudflare. Без legacy и зоопарка.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Почему мы"
          title="6 причин работать с SFFRILT"
          description="Без воды и баззвордов — то, что реально отличает нас от агентств и фрилансеров."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <GlassCard key={p.title} className="h-full">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
