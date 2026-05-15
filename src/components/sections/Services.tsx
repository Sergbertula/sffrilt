import {
  Bot,
  BrainCircuit,
  Factory,
  TrendingUp,
  Plug,
  BarChart3,
  ShoppingCart,
  Sparkles,
  HeadphonesIcon,
  Building2,
  Workflow,
  Globe,
  LayoutTemplate,
  Briefcase,
  Store,
  Search,
  Wrench,
  ListTree,
  Newspaper,
} from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

type Service = { icon: typeof Bot; title: string; desc: string };

const ai: Service[] = [
  { icon: Bot, title: "AI-агенты", desc: "Автономные ассистенты для задач и переписок." },
  { icon: BrainCircuit, title: "AI-консультанты", desc: "Эксперт-боты с базой знаний компании." },
  { icon: Factory, title: "AI для производства", desc: "Контроль, прогноз и оптимизация процессов." },
  { icon: TrendingUp, title: "AI для продаж", desc: "Лид-скоринг, рекомендации, автодожим." },
  { icon: Plug, title: "AI-интеграции", desc: "Связка с CRM, 1С, Bitrix, amoCRM." },
  { icon: BarChart3, title: "AI-аналитика", desc: "Дашборды, инсайты, прогнозы спроса." },
];

const tg: Service[] = [
  { icon: ShoppingCart, title: "Боты продаж", desc: "Каталог, оплата, доставка прямо в чате." },
  { icon: Sparkles, title: "AI Telegram-боты", desc: "GPT-ассистенты для клиентов 24/7." },
  { icon: HeadphonesIcon, title: "Боты поддержки", desc: "Тикеты, FAQ, эскалация на оператора." },
  { icon: Building2, title: "Корпоративные боты", desc: "HR, отчёты, согласования внутри компании." },
  { icon: Workflow, title: "Боты автоматизации", desc: "Триггеры, рассылки, бизнес-процессы." },
];

const web: Service[] = [
  { icon: LayoutTemplate, title: "Landing Page", desc: "Продающие лендинги под рекламу." },
  { icon: Globe, title: "Корпоративные сайты", desc: "Имидж, услуги, портфолио, новости." },
  { icon: Briefcase, title: "B2B сайты", desc: "Каталоги, заявки, личные кабинеты." },
  { icon: Store, title: "Интернет-магазины", desc: "Каталог, корзина, оплата, аналитика." },
];

const seo: Service[] = [
  { icon: Sparkles, title: "AI SEO", desc: "Контент и оптимизация с ИИ-инструментами." },
  { icon: Wrench, title: "Техническое SEO", desc: "Скорость, индексация, Core Web Vitals." },
  { icon: ListTree, title: "SEO-структура", desc: "Семантика, кластеры, перелинковка." },
  { icon: Newspaper, title: "Контент-маркетинг", desc: "Статьи, лонгриды, экспертные публикации." },
];

function Group({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Service[];
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <GlassCard key={s.title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
              <s.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 font-display text-lg font-semibold text-foreground">
              {s.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Услуги"
          title="Полный стек AI-автоматизации"
          description="От стратегии до интеграций: помогаем бизнесу зарабатывать больше с помощью технологий."
        />
        <div className="mt-16 space-y-20">
          <Group eyebrow="AI" title="AI-решения" items={ai} />
          <Group eyebrow="Telegram" title="Telegram-боты" items={tg} />
          <Group eyebrow="Web" title="Разработка сайтов" items={web} />
          <Group eyebrow="SEO" title="SEO-продвижение" items={seo} />
        </div>
      </div>
    </section>
  );
}
