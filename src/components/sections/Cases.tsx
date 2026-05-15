import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { cases } from "@/data/cases";

const steps = [
  { n: "01", title: "Анализируем задачи бизнеса", desc: "Глубокое погружение в процессы и цели." },
  { n: "02", title: "Предлагаем решение", desc: "Архитектура, стек, оценка сроков и эффекта." },
  { n: "03", title: "Разрабатываем систему", desc: "Дизайн, разработка, тестирование, демо." },
  { n: "04", title: "Интегрируем", desc: "Связка с CRM, ERP, мессенджерами и сервисами." },
  { n: "05", title: "Поддерживаем и развиваем", desc: "SLA, обновления, новые фичи, аналитика." },
];

export function Cases() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Кейсы"
          title="Что мы уже сделали"
          description="Каждый проект — про измеримый бизнес-эффект."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to="/cases/$slug"
              params={{ slug: c.slug }}
              className="group block focus:outline-none"
            >
              <GlassCard className="h-full !p-0 transition-transform group-hover:-translate-y-1">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <img
                    src={c.cover}
                    alt={`${c.client} — ${c.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 text-primary ring-1 ring-primary/30 backdrop-blur">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <ArrowUpRight className="absolute right-3 top-3 h-4 w-4 text-foreground/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {c.tag}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                    {c.client}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                      {c.headlineMetric}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.duration}</span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Процесс"
            title="Как мы работаем"
            description="Прозрачная схема от первого звонка до развития системы."
          />
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-5">
              {steps.map((s, i) => (
                <div key={s.n} className="relative">
                  <div className="rounded-2xl glass p-5 transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-primary-foreground">
                        {s.n}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-primary">
                        Этап {i + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 font-display text-base font-semibold text-foreground">
                      {s.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
