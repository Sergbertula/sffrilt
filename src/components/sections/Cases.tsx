import { Workflow, Bot, BrainCircuit, Globe, ArrowUpRight } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const cases = [
  {
    icon: Workflow,
    tag: "Автоматизация",
    title: "Автоматизация бизнеса",
    desc: "Связка CRM, 1С и мессенджеров: заявки обрабатываются в 4 раза быстрее.",
    metric: "−65% ручной работы",
  },
  {
    icon: Bot,
    tag: "Telegram",
    title: "Telegram-боты",
    desc: "Бот продаж с оплатой и каталогом для сети розничных магазинов.",
    metric: "+38% конверсия",
  },
  {
    icon: BrainCircuit,
    tag: "AI",
    title: "AI-решения",
    desc: "AI-консультант на базе знаний компании: 24/7 ответы клиентам и операторам.",
    metric: "−72% нагрузка на саппорт",
  },
  {
    icon: Globe,
    tag: "Web",
    title: "Разработка сайтов",
    desc: "B2B-портал с личным кабинетом и интеграцией с ERP заказчика.",
    metric: "×2 рост заявок",
  },
];

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
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <GlassCard key={c.title}>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-primary">
                {c.tag}
              </p>
              <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                {c.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <p className="mt-4 inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                {c.metric}
              </p>
            </GlassCard>
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
