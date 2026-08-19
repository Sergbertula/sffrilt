import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/sections/ContactForm";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Блог — SFFRILT" },
      {
        name: "description",
        content:
          "Статьи об AI, Telegram-ботах, разработке сайтов и SEO. Опыт SFFRILT в реальных проектах.",
      },
      { property: "og:title", content: "Блог SFFRILT — об AI, Telegram-ботах и автоматизации бизнеса" },
      {
        property: "og:description",
        content: "Практические статьи без хайпа: как выбрать AI-агента, сколько стоит бот, SEO для B2B.",
      },
    ],
  }),
  component: Page,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Page() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHero
        eyebrow="Блог"
        title={
          <>
            Опыт <span className="text-gradient">из реальных проектов</span>
          </>
        }
        description="Статьи об AI, автоматизации, ботах и сайтах. Без воды и баззвордов — то, что мы сами применяем."
      />

      <section className="relative pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block"
          >
            <GlassCard className="!p-0 overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-5">
                <div className="relative lg:col-span-2 min-h-[260px] bg-gradient-to-br from-primary/30 via-accent/20 to-background">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.7_0.2_245/0.4),transparent_70%)]" />
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm ring-1 ring-primary/20">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:col-span-3 lg:p-10">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Свежее
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl group-hover:text-gradient transition-all">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readTime} мин
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Читать статью
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="group"
              >
                <GlassCard className="flex h-full flex-col">
                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                    {a.category}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(a.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {a.readTime} мин
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
