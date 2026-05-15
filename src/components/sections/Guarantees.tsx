import { ShieldCheck, Clock, RefreshCw, FileCheck2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Договор и закрывающие документы",
    desc: "ИП/ООО, работаем по договору с НДА. Акты, счета, оплата по безналу или картой. Подходим под ФЗ-152.",
  },
  {
    icon: Clock,
    title: "Сроки в договоре",
    desc: "Каждый этап со сроком и санкциями за просрочку с нашей стороны. Если опоздаем — компенсируем процентом.",
  },
  {
    icon: RefreshCw,
    title: "Гарантия 6 месяцев",
    desc: "Бесплатно правим баги и дорабатываем то, что отклоняется от ТЗ. Полгода после сдачи — наша зона ответственности.",
  },
  {
    icon: FileCheck2,
    title: "Код и доступы — ваши",
    desc: "Передаём исходники, репозиторий, доступы к серверам и БД. Не привязываем к себе — вы можете уйти к любому подрядчику.",
  },
];

export function Guarantees() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Гарантии"
          title="Что мы фиксируем в договоре"
          description="Без рисков и серых схем. Каждое обещание — пункт договора, а не строчка на сайте."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <g.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {g.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
