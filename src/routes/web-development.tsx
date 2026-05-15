import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { LayoutTemplate, Globe, Briefcase, Store } from "lucide-react";

const items = [
  { icon: LayoutTemplate, title: "Landing Page", desc: "Продающие лендинги для рекламы и запуска." },
  { icon: Globe, title: "Корпоративные сайты", desc: "Имидж, услуги, портфолио, новости компании." },
  { icon: Briefcase, title: "B2B сайты", desc: "Каталоги, личные кабинеты, заявки, ERP-связки." },
  { icon: Store, title: "Интернет-магазины", desc: "Каталог, оплата, доставка, аналитика." },
];

export const Route = createFileRoute("/web-development")({
  head: () => ({
    meta: [
      { title: "Разработка сайтов — SFFRILT" },
      {
        name: "description",
        content:
          "Лендинги, корпоративные сайты, B2B-порталы, интернет-магазины. Премиальный дизайн и быстрая загрузка.",
      },
      { property: "og:title", content: "Разработка сайтов — SFFRILT" },
      {
        property: "og:description",
        content: "Современные сайты, которые приносят заявки и продажи.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Разработка сайтов"
        title={
          <>
            Сайты, которые <span className="text-gradient">продают</span>
          </>
        }
        description="Дизайн уровня премиум, скорость и SEO с первого дня. От лендинга до B2B-портала."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Форматы"
            title="Что мы делаем"
            description="Подбираем формат под задачу и бюджет."
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
