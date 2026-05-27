import { createFileRoute } from "@tanstack/react-router";
import { serviceSchema, ldScript } from "@/lib/schema";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Packages, type PackageTier } from "@/components/sections/Packages";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import {
  ShoppingCart,
  Sparkles,
  HeadphonesIcon,
  Building2,
  Workflow,
} from "lucide-react";

const items = [
  { icon: ShoppingCart, title: "Боты продаж", desc: "Каталог, корзина, оплата прямо в Telegram." },
  { icon: Sparkles, title: "AI Telegram-боты", desc: "GPT-ассистенты с памятью и базой знаний." },
  { icon: HeadphonesIcon, title: "Боты поддержки", desc: "Тикеты, FAQ, эскалация на оператора." },
  { icon: Building2, title: "Корпоративные боты", desc: "HR, согласования, отчёты внутри компании." },
  { icon: Workflow, title: "Боты автоматизации", desc: "Триггеры, рассылки, сценарии бизнес-процессов." },
];

const tiers: PackageTier[] = [
  {
    name: "Старт",
    price: "от 80 000 ₽",
    duration: "10–14 дней",
    description: "MVP-бот для проверки гипотезы или простой автоматизации.",
    features: [
      "До 15 экранов и сценариев",
      "Webhook-приём заявок в почту/Telegram",
      "Базовая аналитика и логи",
      "Хостинг на нашей инфраструктуре",
      "1 месяц поддержки в подарок",
    ],
  },
  {
    name: "Стандарт",
    price: "от 250 000 ₽",
    duration: "3–4 недели",
    description: "Боевой бот с интеграциями в CRM и оплатой.",
    highlight: true,
    features: [
      "Каталог, корзина, оплата (ЮKassa / Тинькофф)",
      "Интеграция с Bitrix24 / amoCRM / 1С",
      "AI-ответы по базе знаний",
      "Админ-панель для контента",
      "SLA-поддержка 3 месяца",
    ],
  },
  {
    name: "Продакшен",
    price: "от 600 000 ₽",
    duration: "6–10 недель",
    description: "Сложная экосистема ботов с аналитикой и масштабом.",
    features: [
      "Несколько ботов в единой админке",
      "Глубокая интеграция с ERP / WMS / OMS",
      "Очереди, retry, мониторинг 24/7",
      "Кастомная LLM-логика и RAG",
      "Годовое сопровождение и SLA",
    ],
  },
];

export const Route = createFileRoute("/telegram-bots")({
  head: () => ({
    meta: [
      { title: "Telegram-боты для бизнеса — SFFRILT" },
      {
        name: "description",
        content: "Разработка Telegram-ботов: продажи, поддержка, AI-ассистенты, автоматизация.",
      },
      { property: "og:title", content: "Telegram-боты для бизнеса — SFFRILT" },
      {
        property: "og:description",
        content: "AI-боты, боты продаж и поддержки с интеграцией в CRM.",
      },
      { property: "og:url", content: "https://sffrilt.ru/telegram-bots" },
      { name: "twitter:title", content: "Telegram-боты для бизнеса — SFFRILT" },
      { name: "twitter:description", content: "AI-боты, боты продаж и поддержки с интеграцией в CRM." },
    ],
    links: [
      { rel: "canonical", href: "https://sffrilt.ru/telegram-bots" },
    ],
    scripts: [
      ldScript(
        serviceSchema({
          name: "Разработка Telegram-ботов",
          description:
            "Разработка Telegram-ботов: продажи, поддержка, AI-ассистенты, автоматизация и интеграция с CRM.",
          url: "https://sffrilt.ru/telegram-bots",
        }),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Telegram-боты"
        title={
          <>
            Telegram-боты, которые <span className="text-gradient">приносят заявки</span>
          </>
        }
        description="Боты с AI, оплатой и интеграциями. Запускаем за 2–4 недели и берём поддержку на себя."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Что делаем"
            title="Типы Telegram-ботов"
            description="От простых FAQ до полноценных AI-ассистентов с интеграциями."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        title="Сколько стоит и что входит"
        description="Три формата под разные задачи — от пилота до промышленного запуска."
        tiers={tiers}
      />
      <ContactForm />
    </>
  );
}
