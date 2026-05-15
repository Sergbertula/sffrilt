import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const steps = [
  {
    n: "01",
    title: "Бриф и аудит",
    desc: "30-минутный созвон, разбираем задачу, текущие процессы и узкие места. На выходе — короткое ТЗ и оценка ROI.",
    days: "1–2 дня",
  },
  {
    n: "02",
    title: "Смета и прототип",
    desc: "Фиксируем сроки, стек и стоимость. Показываем кликабельный прототип или демо AI-агента на ваших данных.",
    days: "3–5 дней",
  },
  {
    n: "03",
    title: "Разработка спринтами",
    desc: "Недельные спринты с демо в пятницу. Доступ к таск-трекеру, прогресс в Notion, оперативная связь в Telegram.",
    days: "2–6 недель",
  },
  {
    n: "04",
    title: "Запуск и интеграции",
    desc: "Подключаем CRM, телефонию, мессенджеры и платежи. Обучаем команду, передаём документацию и доступы.",
    days: "3–7 дней",
  },
  {
    n: "05",
    title: "Поддержка и развитие",
    desc: "SLA 24/7, мониторинг, бэкапы. Дообучаем модели, добавляем сценарии и масштабируем под рост нагрузки.",
    days: "по подписке",
  },
];

export function Process() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Как мы работаем"
          title="5 шагов от идеи до запуска"
          description="Прозрачный процесс без сюрпризов в счёте и сроках. Вы видите результат уже на второй неделе."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <GlassCard key={s.n} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                  {s.n}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                  {s.days}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
