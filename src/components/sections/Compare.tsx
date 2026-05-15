import { Check, Minus, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";

type Cell = boolean | "partial" | string;

const rows: { label: string; sffrilt: Cell; freelancer: Cell; agency: Cell }[] = [
  { label: "Срок до запуска MVP", sffrilt: "2–4 недели", freelancer: "1–3 месяца", agency: "3–6 месяцев" },
  { label: "Фикс-цена и фикс-сроки", sffrilt: true, freelancer: "partial", agency: false },
  { label: "Команда под ключ (дизайн + AI + бэк + DevOps)", sffrilt: true, freelancer: false, agency: true },
  { label: "Прозрачный таск-трекер и демо каждую неделю", sffrilt: true, freelancer: false, agency: "partial" },
  { label: "Свой код и инфраструктура у заказчика", sffrilt: true, freelancer: "partial", agency: false },
  { label: "Поддержка и SLA 24/7", sffrilt: true, freelancer: false, agency: true },
  { label: "Гарантия на работу 6 месяцев", sffrilt: true, freelancer: false, agency: "partial" },
  { label: "Договор, ФЗ-152, закрывающие документы", sffrilt: true, freelancer: "partial", agency: true },
  { label: "Стоимость средней автоматизации", sffrilt: "от 150 ₽к", freelancer: "от 80 ₽к", agency: "от 600 ₽к" },
];

function CellView({ value }: { value: Cell }) {
  if (value === true)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
        <Check className="h-4 w-4" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10 text-destructive/80 ring-1 ring-destructive/20">
        <X className="h-4 w-4" />
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground ring-1 ring-border">
        <Minus className="h-4 w-4" />
      </span>
    );
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

export function Compare() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Сравнение"
          title="SFFRILT vs фрилансер vs агентство"
          description="Без маркетинга — реальные цифры и обязательства, которые вы получаете на каждом подходе."
        />

        <div className="mt-14 overflow-hidden rounded-2xl glass">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-border/60 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-5 font-medium">Параметр</th>
                  <th className="px-6 py-5 text-center">
                    <span className="font-display text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      SFFRILT
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center font-medium">Фрилансер</th>
                  <th className="px-6 py-5 text-center font-medium">Агентство</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={
                      i !== rows.length - 1
                        ? "border-b border-border/40 transition-colors hover:bg-primary/5"
                        : "transition-colors hover:bg-primary/5"
                    }
                  >
                    <td className="px-6 py-4 text-sm text-foreground">{r.label}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellView value={r.sffrilt} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellView value={r.freelancer} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellView value={r.agency} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
