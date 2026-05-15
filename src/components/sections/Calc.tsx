import { useMemo, useState } from "react";
import { Calculator, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

type ServiceKey = "ai" | "bot" | "site" | "seo";
type ScopeKey = "small" | "medium" | "large";
type AddOnKey = "crm" | "payments" | "design" | "support";

const services: { key: ServiceKey; label: string; base: number; weeks: [number, number] }[] = [
  { key: "ai", label: "AI-агент", base: 150_000, weeks: [2, 4] },
  { key: "bot", label: "Telegram-бот", base: 60_000, weeks: [1, 3] },
  { key: "site", label: "Сайт / веб-сервис", base: 120_000, weeks: [2, 6] },
  { key: "seo", label: "SEO-продвижение", base: 80_000, weeks: [4, 8] },
];

const scopes: { key: ScopeKey; label: string; mult: number; desc: string }[] = [
  { key: "small", label: "Простой", mult: 1, desc: "1 сценарий, 1 канал, базовая логика" },
  { key: "medium", label: "Средний", mult: 2.2, desc: "Несколько ролей, интеграции, аналитика" },
  { key: "large", label: "Сложный", mult: 4.5, desc: "Много модулей, ФЗ-152, нестандартные процессы" },
];

const addOns: { key: AddOnKey; label: string; price: number; desc: string }[] = [
  { key: "crm", label: "Интеграция с CRM", price: 60_000, desc: "amoCRM / Bitrix24 / 1С" },
  { key: "payments", label: "Приём оплат", price: 40_000, desc: "ЮKassa / Тинькофф / Stripe" },
  { key: "design", label: "Уникальный дизайн", price: 90_000, desc: "Брендинг, иллюстрации, motion" },
  { key: "support", label: "Поддержка 6 мес.", price: 120_000, desc: "SLA 24/7, мониторинг, развитие" },
];

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(Math.round(n / 1000) * 1000) + " ₽";
}

export function Calc() {
  const [service, setService] = useState<ServiceKey>("ai");
  const [scope, setScope] = useState<ScopeKey>("medium");
  const [picked, setPicked] = useState<Set<AddOnKey>>(new Set());

  const selectedService = services.find((s) => s.key === service)!;
  const selectedScope = scopes.find((s) => s.key === scope)!;

  const { min, max, weeks } = useMemo(() => {
    const base = selectedService.base * selectedScope.mult;
    const addons = [...picked].reduce(
      (acc, k) => acc + (addOns.find((a) => a.key === k)?.price ?? 0),
      0,
    );
    const min = base + addons;
    const max = min * 1.4;
    const [wMin, wMax] = selectedService.weeks;
    const weeksMin = Math.round(wMin * selectedScope.mult);
    const weeksMax = Math.round(wMax * selectedScope.mult);
    return { min, max, weeks: `${weeksMin}–${weeksMax}` };
  }, [selectedService, selectedScope, picked]);

  function toggle(k: AddOnKey) {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  }

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Калькулятор"
          title="Прикиньте бюджет за 30 секунд"
          description="Выберите тип проекта, масштаб и опции — увидите ориентировочную стоимость и сроки. Точная смета — после брифинга."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8 rounded-2xl glass p-6 sm:p-8">
            {/* Service */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                1. Тип проекта
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setService(s.key)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all",
                      service === s.key
                        ? "border-primary/60 bg-primary/10 ring-1 ring-primary/30"
                        : "border-border bg-background/40 hover:border-primary/30",
                    )}
                  >
                    <div className="font-display text-base font-semibold text-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      от {formatPrice(s.base)} • {s.weeks[0]}–{s.weeks[1]} нед.
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                2. Масштаб
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {scopes.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setScope(s.key)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all",
                      scope === s.key
                        ? "border-primary/60 bg-primary/10 ring-1 ring-primary/30"
                        : "border-border bg-background/40 hover:border-primary/30",
                    )}
                  >
                    <div className="font-display text-sm font-semibold text-foreground">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                3. Дополнительно
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {addOns.map((a) => {
                  const active = picked.has(a.key);
                  return (
                    <button
                      key={a.key}
                      type="button"
                      onClick={() => toggle(a.key)}
                      className={cn(
                        "flex items-start gap-3 rounded-xl border p-4 text-left transition-all",
                        active
                          ? "border-primary/60 bg-primary/10 ring-1 ring-primary/30"
                          : "border-border bg-background/40 hover:border-primary/30",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border",
                        )}
                      >
                        {active && (
                          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                            <path
                              d="M3 8.5l3 3 7-7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-sm font-semibold text-foreground">
                          {a.label}
                        </div>
                        <div className="mt-0.5 text-xs text-muted-foreground">
                          {a.desc} • +{formatPrice(a.price)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 overflow-hidden rounded-2xl glass-strong p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--gradient-glow)] blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  <Calculator className="h-3 w-3" />
                  Оценка
                </span>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Стоимость
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-gradient sm:text-4xl">
                    {formatPrice(min)} – {formatPrice(max)}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Сроки</div>
                    <div className="mt-1 font-display text-lg font-semibold text-foreground">
                      {weeks} нед.
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Опций
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold text-foreground">
                      {picked.size}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    to="/contacts"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-5 py-3.5 text-sm font-medium text-primary-foreground glow-blue transition-all hover:scale-[1.02]"
                  >
                    Получить точную смету
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <p className="text-center text-xs text-muted-foreground">
                    <Sparkles className="mr-1 inline h-3 w-3 text-primary" />
                    Бесплатный брифинг — 30 минут
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
