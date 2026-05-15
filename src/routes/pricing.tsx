import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { Compare } from "@/components/sections/Compare";
import { Calc } from "@/components/sections/Calc";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Цены и тарифы — SFFRILT" },
      {
        name: "description",
        content:
          "Стоимость AI-решений, Telegram-ботов, сайтов и SEO от SFFRILT. Прозрачные пакеты, фикс-цена, фикс-сроки.",
      },
      { property: "og:title", content: "Цены и тарифы SFFRILT" },
      {
        property: "og:description",
        content: "Прозрачные пакеты под AI, ботов, сайты и SEO — фикс-цена и фикс-сроки.",
      },
    ],
  }),
  component: Page,
});

interface Tier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const groups: { eyebrow: string; title: string; tiers: Tier[] }[] = [
  {
    eyebrow: "AI-решения",
    title: "AI-агенты и автоматизация",
    tiers: [
      {
        name: "Старт",
        price: "от 150 000 ₽",
        duration: "2–3 недели",
        description: "Один AI-сценарий: чат-бот на сайт или AI-ассистент в одном канале.",
        features: [
          "1 AI-сценарий с подключением к GPT-4o/Claude",
          "База знаний на ваших данных (RAG)",
          "Интеграция с одним каналом",
          "Базовая аналитика диалогов",
          "Гарантия 3 месяца",
        ],
      },
      {
        name: "Бизнес",
        price: "от 350 000 ₽",
        duration: "4–6 недель",
        description: "AI-система с интеграциями в CRM, телефонию и мессенджеры.",
        highlight: true,
        features: [
          "До 3 AI-сценариев и ролей",
          "Интеграция с CRM и телефонией",
          "Мультиканальность (сайт, Telegram, WhatsApp)",
          "Дашборд и сегментация лидов",
          "Дообучение на ваших диалогах",
          "Гарантия 6 месяцев",
        ],
      },
      {
        name: "Enterprise",
        price: "от 900 000 ₽",
        duration: "от 6 недель",
        description: "Сложные AI-системы, on-premise модели, ФЗ-152.",
        features: [
          "On-premise или приватное облако",
          "Кастомные AI-агенты и оркестрация",
          "Интеграция с 1С/SAP/ERP",
          "ФЗ-152, NDA, аудит безопасности",
          "Выделенный менеджер и SLA 24/7",
        ],
      },
    ],
  },
  {
    eyebrow: "Telegram-боты",
    title: "Telegram-боты для бизнеса",
    tiers: [
      {
        name: "Лайт",
        price: "от 60 000 ₽",
        duration: "1–2 недели",
        description: "Бот-визитка, каталог или сбор заявок с уведомлениями менеджеру.",
        features: [
          "До 10 сценариев / экранов",
          "Меню, кнопки, FAQ",
          "Сбор заявок в Google Sheets / на email",
          "Базовая админка",
          "Гарантия 3 месяца",
        ],
      },
      {
        name: "Про",
        price: "от 180 000 ₽",
        duration: "3–4 недели",
        description: "Бот с CRM, оплатами и личным кабинетом пользователя.",
        highlight: true,
        features: [
          "Интеграция с amoCRM/Bitrix24",
          "Приём оплат (ЮKassa, Тинькофф)",
          "Личный кабинет и история заказов",
          "Рассылки и сегменты аудитории",
          "AI-ответы на типовые вопросы",
          "Гарантия 6 месяцев",
        ],
      },
      {
        name: "Платформа",
        price: "от 450 000 ₽",
        duration: "от 5 недель",
        description: "Telegram Mini App, маркетплейс или сложная b2b-платформа.",
        features: [
          "Telegram Mini App (React + WebApp API)",
          "Многоуровневая роль: клиент/менеджер/админ",
          "Платежи, подписки, инвойсы",
          "Очереди, нагрузка, мониторинг",
          "SLA 24/7 и развитие по подписке",
        ],
      },
    ],
  },
  {
    eyebrow: "Сайты",
    title: "Разработка сайтов",
    tiers: [
      {
        name: "Лендинг",
        price: "от 120 000 ₽",
        duration: "2–3 недели",
        description: "Продающий лендинг с дизайном под ключ и интеграциями.",
        features: [
          "Уникальный дизайн под бренд",
          "Адаптив, скорость 90+ Lighthouse",
          "Базовая SEO-оптимизация",
          "Формы и интеграция с CRM/мессенджерами",
          "Аналитика (Метрика, GA4)",
        ],
      },
      {
        name: "Корпоративный",
        price: "от 280 000 ₽",
        duration: "4–6 недель",
        description: "Многостраничный сайт с CMS, блогом и каталогом услуг.",
        highlight: true,
        features: [
          "До 15 страниц + блог/новости",
          "CMS на удобной админке",
          "SEO-разметка и Schema.org",
          "Мультиязычность по запросу",
          "Хостинг и поддержка 3 месяца",
        ],
      },
      {
        name: "Веб-сервис",
        price: "от 600 000 ₽",
        duration: "от 6 недель",
        description: "SaaS, маркетплейс или личный кабинет с бэкендом.",
        features: [
          "Авторизация, роли, биллинг",
          "PostgreSQL, Supabase, очереди",
          "Интеграции с внешними API",
          "DevOps, CI/CD, мониторинг",
          "SLA и развитие по подписке",
        ],
      },
    ],
  },
  {
    eyebrow: "SEO",
    title: "SEO-продвижение",
    tiers: [
      {
        name: "Аудит",
        price: "от 40 000 ₽",
        duration: "1–2 недели",
        description: "Глубокий SEO-аудит с конкретным планом работ на 6 месяцев.",
        features: [
          "Технический аудит (200+ пунктов)",
          "Семантическое ядро до 500 запросов",
          "Анализ конкурентов и контента",
          "Roadmap на полгода",
          "Передача в любого подрядчика",
        ],
      },
      {
        name: "Продвижение",
        price: "от 80 000 ₽/мес",
        duration: "от 6 мес.",
        description: "Полный цикл: технический SEO, контент и линкбилдинг.",
        highlight: true,
        features: [
          "Технические правки сайта",
          "4–8 SEO-статей в месяц",
          "Линкбилдинг (крауд, аутрич, PR)",
          "Отчёт раз в неделю",
          "Гарантия роста позиций",
        ],
      },
      {
        name: "Премиум",
        price: "от 180 000 ₽/мес",
        duration: "от 6 мес.",
        description: "Высококонкурентные ниши, мультигеография и контент-маркетинг.",
        features: [
          "Расширенная семантика 5000+",
          "До 20 материалов в месяц",
          "Видео и инфографика",
          "PR-публикации в СМИ",
          "Выделенный SEO-менеджер",
        ],
      },
    ],
  },
];

function Tier({ t }: { t: Tier }) {
  return (
    <GlassCard
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
      <ul className="mt-6 space-y-3">
        {t.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Link
          to="/contacts"
          className={cn(
            "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all",
            t.highlight
              ? "gradient-primary text-primary-foreground glow-blue hover:scale-[1.02]"
              : "border border-border bg-background/40 text-foreground hover:border-primary/40 hover:bg-primary/5",
          )}
        >
          Обсудить
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </GlassCard>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Тарифы"
        title={
          <>
            Прозрачные цены <span className="text-gradient">без сюрпризов</span>
          </>
        }
        description="Фикс-стоимость и фикс-сроки в договоре. Стартовые цены — финальная смета после 30-минутного брифинга."
      />

      {groups.map((g, idx) => (
        <section
          key={g.title}
          className={cn("relative", idx === 0 ? "pb-20 sm:pb-28" : "py-20 sm:py-28")}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow={g.eyebrow} title={g.title} />
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {g.tiers.map((t) => (
                <Tier key={t.name} t={t} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <Calc />
      <Compare />
      <Faq />
      <ContactForm />
    </>
  );
}
