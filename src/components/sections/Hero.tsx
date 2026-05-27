import { Link } from "@tanstack/react-router";
import { Send, ArrowRight, Bot, Globe, BarChart3, Plug } from "lucide-react";
import hero3dBadge from "@/assets/hero-3d-badge.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-[var(--gradient-violet-glow)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 py-1 pl-1 pr-4 text-xs font-medium text-primary backdrop-blur">
            <img
              src={hero3dBadge}
              alt="AI-автоматизация бизнеса — SFFRILT, Тула"
              width={28}
              height={28}
              className="h-7 w-7 object-contain drop-shadow-[0_0_8px_oklch(0.7_0.2_245/0.6)]"
            />
            AI-автоматизация бизнеса · 2026
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            Автоматизируем бизнес с помощью{" "}
            <span className="text-gradient">AI, Telegram-ботов</span> и современных web-решений
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Разрабатываем AI-системы, Telegram-ботов и сайты, которые помогают компаниям
            автоматизировать процессы, обрабатывать заявки и увеличивать поток клиентов.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contacts"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] transition-transform hover:scale-105 sm:w-auto"
            >
              Обсудить проект
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://t.me/tehprom1"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 sm:w-auto"
            >
              <Send className="h-4 w-4 text-primary" />
              Написать в Telegram
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Bot, label: "AI-решения для бизнеса" },
              { icon: Send, label: "Telegram-боты и автоматизация" },
              { icon: Globe, label: "SEO и продающие сайты" },
              { icon: Plug, label: "Интеграции и поддержка" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2.5 rounded-xl glass px-3 py-2.5 text-left text-xs text-muted-foreground sm:text-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <t.icon className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium text-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visualization mockup */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-60 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border glass-strong p-2 shadow-elegant">
            <div className="rounded-xl bg-background/80 p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Обработано заявок", value: "12 480", trend: "+24%" },
                  { label: "AI-сценариев", value: "186", trend: "+8 за неделю" },
                  { label: "Конверсия", value: "32.4%", trend: "+5.1%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-card/40 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold text-foreground">
                      {m.value}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                      <BarChart3 className="h-3 w-3" /> {m.trend}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <div className="rounded-xl border border-border bg-card/40 p-4 lg:col-span-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Поток обращений · 7 дней
                    </p>
                    <span className="text-xs text-primary">live</span>
                  </div>
                  <svg viewBox="0 0 400 100" className="mt-3 h-24 w-full">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.7 0.2 245)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="oklch(0.7 0.2 245)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 80 L40 60 L80 65 L120 40 L160 50 L200 30 L240 35 L280 20 L320 28 L360 12 L400 18 L400 100 L0 100 Z"
                      fill="url(#g1)"
                    />
                    <path
                      d="M0 80 L40 60 L80 65 L120 40 L160 50 L200 30 L240 35 L280 20 L320 28 L360 12 L400 18"
                      fill="none"
                      stroke="oklch(0.7 0.2 245)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="rounded-xl border border-border bg-card/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Активные AI-агенты
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {["Sales Bot", "Support AI", "Analytics"].map((a) => (
                      <li
                        key={a}
                        className="flex items-center justify-between rounded-lg bg-background/40 px-3 py-2"
                      >
                        <span className="text-foreground">{a}</span>
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-glow-pulse" />
                          online
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
