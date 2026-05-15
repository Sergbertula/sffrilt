import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { Sparkles, Wrench, ListTree, Newspaper } from "lucide-react";

const items = [
  { icon: Sparkles, title: "AI SEO", desc: "Контент и оптимизация с применением AI-инструментов." },
  { icon: Wrench, title: "Техническое SEO", desc: "Скорость, индексация, Core Web Vitals, разметка." },
  { icon: ListTree, title: "SEO-структура", desc: "Семантика, кластеры, перелинковка." },
  { icon: Newspaper, title: "Контент-маркетинг", desc: "Экспертные статьи, лонгриды, публикации." },
];

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: "SEO-продвижение — SFFRILT" },
      {
        name: "description",
        content: "AI SEO, техническое SEO, структура и контент-маркетинг для роста трафика.",
      },
      { property: "og:title", content: "SEO-продвижение — SFFRILT" },
      {
        property: "og:description",
        content: "Комплексное SEO с использованием современных AI-инструментов.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="SEO"
        title={
          <>
            SEO с <span className="text-gradient">AI-усилением</span>
          </>
        }
        description="Растим органику системно: техника, структура, контент. С прозрачной отчётностью."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Направления"
            title="Что входит в SEO"
            description="Берём проект целиком или подключаемся к существующей команде."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((s) => (
              <GlassCard key={s.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
