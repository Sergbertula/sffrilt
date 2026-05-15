import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Packages, type PackageTier } from "@/components/sections/Packages";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { LayoutTemplate, Globe, Briefcase, Store } from "lucide-react";

const items = [
  { icon: LayoutTemplate, title: "Landing Page", desc: "Продающие лендинги для рекламы и запуска." },
  { icon: Globe, title: "Корпоративные сайты", desc: "Имидж, услуги, портфолио, новости компании." },
  { icon: Briefcase, title: "B2B сайты", desc: "Каталоги, личные кабинеты, заявки, ERP-связки." },
  { icon: Store, title: "Интернет-магазины", desc: "Каталог, оплата, доставка, аналитика." },
];

const tiers: PackageTier[] = [
  {
    name: "Лендинг",
    price: "от 120 000 ₽",
    duration: "2–3 недели",
    description: "Продающий one-page для запуска продукта или рекламной кампании.",
    features: [
      "Уникальный дизайн под бренд",
      "Адаптив, скорость, Core Web Vitals",
      "Формы, интеграция с CRM/Telegram",
      "Базовое SEO и микроразметка",
      "Хостинг и SSL — на нашей стороне",
    ],
  },
  {
    name: "Корпоративный сайт",
    price: "от 350 000 ₽",
    duration: "4–6 недель",
    description: "Многостраничный сайт с CMS, блогом и интеграциями.",
    highlight: true,
    features: [
      "До 20 уникальных страниц + блог",
      "Headless CMS для самостоятельных правок",
      "Многоязычность и SEO-структура",
      "Интеграции с CRM, аналитикой, чатами",
      "3 месяца поддержки и доработок",
    ],
  },
  {
    name: "B2B / интернет-магазин",
    price: "от 900 000 ₽",
    duration: "8–14 недель",
    description: "Личный кабинет, каталог, оплата, ERP-связки.",
    features: [
      "Личный кабинет и роли пользователей",
      "Каталог 1 000+ SKU, фильтры, поиск",
      "Оплата, доставка, логистика, ЭДО",
      "Двусторонняя синхронизация с 1С / SAP",
      "Годовой SLA и развитие платформы",
    ],
  },
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
      <Packages
        eyebrow="Пакеты"
        title="Стоимость и сроки"
        description="Подбираем формат под задачу — от лендинга до B2B-портала."
        tiers={tiers}
      />
      <ContactForm />
    </>
  );
}
