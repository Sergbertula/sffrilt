import { Send, ArrowRight, Check } from "lucide-react";
import juliaAvatar from "@/assets/julia-avatar.jpg";

export function JuliaSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-6 sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--gradient-violet-glow)] blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-[var(--gradient-glow)] blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
                AI Assistant
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Юлия — <span className="text-gradient">цифровой помощник</span> SFFRILT
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Юлия поможет оставить заявку, подобрать услугу и связаться со специалистом.
                Работает 24/7, отвечает мгновенно, передаёт сложные запросы команде.
              </p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {[
                  "Подбор услуги под ваш бизнес",
                  "Быстрая заявка прямо в чате",
                  "Связь со специалистом в один клик",
                  "Интеграция с Telegram",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() =>
                    document
                      .querySelector<HTMLButtonElement>('[aria-label="Открыть чат с Юлией"]')
                      ?.click()
                  }
                  className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] hover:scale-105 transition-transform"
                >
                  Написать Юлии
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="https://t.me/tehprom1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
                >
                  <Send className="h-4 w-4 text-primary" />
                  Telegram
                </a>
              </div>
            </div>

            {/* Visual: AI avatar + chat preview */}
            <div className="relative">
              <div className="mx-auto flex max-w-md flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 -m-8 rounded-full bg-[var(--gradient-glow)] blur-2xl animate-glow-pulse" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full gradient-primary glow-blue ring-4 ring-background overflow-hidden">
                    <img
                      src={juliaAvatar}
                      alt="Юлия — AI-ассистент SFFRILT, работает 24/7"
                      width={128}
                      height={128}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="absolute -right-1 bottom-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 ring-4 ring-background">
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>
                </div>
                <p className="mt-4 font-display text-lg font-semibold text-foreground">Юлия</p>
                <p className="text-xs text-muted-foreground">AI-помощник · онлайн</p>

                <div className="mt-6 w-full space-y-2.5">
                  <div className="max-w-[80%] rounded-2xl glass px-3.5 py-2 text-sm text-foreground">
                    Здравствуйте! Подскажите, какая задача стоит перед вашим бизнесом?
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl gradient-primary px-3.5 py-2 text-sm text-primary-foreground">
                    Хочу автоматизировать заявки из Telegram
                  </div>
                  <div className="max-w-[85%] rounded-2xl glass px-3.5 py-2 text-sm text-foreground">
                    Отлично! Подготовлю варианты Telegram-бота с AI и интеграцией с CRM.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
