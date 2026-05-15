import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/sections/ContactForm";
import { cases, getCaseBySlug } from "@/data/cases";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const study = getCaseBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    if (!study) {
      return {
        meta: [
          { title: "Кейс не найден — SFFRILT" },
          { name: "description", content: "Запрошенный кейс не найден." },
        ],
      };
    }
    const title = `${study.client} — ${study.title} | SFFRILT`;
    const description = study.short;
    return {
      meta: [
        { title: title.slice(0, 60) },
        { name: "description", content: description.slice(0, 160) },
        { property: "og:title", content: title.slice(0, 60) },
        { property: "og:description", content: description.slice(0, 160) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Что-то пошло не так</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Попробовать снова
        </button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <span className="text-xs uppercase tracking-wider text-primary">404</span>
      <h1 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
        Кейс не найден
      </h1>
      <p className="mt-4 text-muted-foreground">
        Возможно, ссылка устарела. Посмотрите все наши проекты.
      </p>
      <Link
        to="/cases"
        className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
      >
        Все кейсы
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  ),
  component: CasePage,
});

function CasePage() {
  const { study } = Route.useLoaderData();
  const Icon = study.icon;
  const others = cases.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl" />
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Все кейсы
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              {study.tag}
            </span>
            <span className="text-xs text-muted-foreground">{study.industry}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{study.duration}</span>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-sm font-medium text-primary">{study.client}</p>
              <h1 className="mt-1 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {study.title}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {study.short}
          </p>
        </div>
      </section>

      <section className="relative pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <GlassCard key={m.label} hover={false} className="text-center">
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard hover={false}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Задача
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
                Что нужно было решить
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{study.task}</p>
            </GlassCard>
            <GlassCard hover={false}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Решение
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
                Что мы сделали
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
            </GlassCard>
          </div>

          <div className="mt-6">
            <GlassCard hover={false}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Стек технологий
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contacts"
              className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] hover:scale-105 transition-transform"
            >
              Обсудить похожий проект
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://t.me/tehprom1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
            >
              <Send className="h-4 w-4 text-primary" />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Другие кейсы
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to="/cases/$slug"
                  params={{ slug: c.slug }}
                  className="group block focus:outline-none"
                >
                  <GlassCard className="h-full">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {c.tag}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                      {c.client}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground/80">{c.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.short}</p>
                    <p className="mt-4 inline-flex items-center rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-400">
                      {c.headlineMetric}
                    </p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
    </>
  );
}
