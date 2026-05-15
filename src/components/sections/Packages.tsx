import { Check, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

export interface PackageTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

interface PackagesProps {
  eyebrow: string;
  title: string;
  description?: string;
  tiers: PackageTier[];
}

export function Packages({ eyebrow, title, description, tiers }: PackagesProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <GlassCard
              key={t.name}
              className={cn(
                "flex h-full flex-col",
                t.highlight && "ring-2 ring-primary/40 shadow-[0_30px_80px_-30px_oklch(0.7_0.2_245/0.5)]",
              )}
            >
              {t.highlight && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/30">
                  <Sparkles className="h-3 w-3" />
                  Чаще всего выбирают
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-gradient">{t.price}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                Срок: {t.duration}
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-border/40 pt-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className={cn(
                  "mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all",
                  t.highlight
                    ? "gradient-primary text-primary-foreground hover:scale-[1.02]"
                    : "glass text-foreground hover:border-primary/40",
                )}
              >
                Обсудить пакет
              </Link>
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Цены ориентировочные. Финальная смета — после 30-минутного брифинга.
        </p>
      </div>
    </section>
  );
}
