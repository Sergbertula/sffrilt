import { Award, Briefcase, Clock, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "60+", label: "Проектов сдано" },
  { icon: Users, value: "40+", label: "Клиентов в работе" },
  { icon: Clock, value: "24/7", label: "Поддержка по SLA" },
  { icon: Award, value: "5 лет", label: "На рынке AI и автоматизации" },
];

export function Stats() {
  return (
    <section className="relative -mt-6 pb-6 sm:-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass">
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          <dl className="relative grid grid-cols-2 divide-y divide-border/40 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4 p-6 sm:flex-col sm:items-start sm:gap-3 sm:p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
