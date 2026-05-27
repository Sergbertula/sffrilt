import { ArrowRight, Send, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ymReachGoal, handleYMClick } from "@/lib/metrika";

export function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14 lg:p-20">
          {/* glow blobs */}
          <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
          {/* grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Бесплатный аудит
            </span>

            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Узнайте, где AI сэкономит вам{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                3+ часа в день
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              30-минутный созвон: разбираем ваши процессы, считаем ROI и показываем 2–3 точки автоматизации.
              Без обязательств, без продаж — только конкретные цифры.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contacts"
                onClick={() => ymReachGoal('discuss_project')}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow-blue transition-all hover:scale-[1.02] sm:w-auto"
              >
                Получить аудит
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://t.me/tehprom1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleYMClick('telegram_click', 'https://t.me/tehprom1', '_blank')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/40 px-7 py-3.5 font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Написать в Telegram
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                Ответ в течение 2 часов
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                NDA по запросу
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Работаем по всей России и СНГ
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
