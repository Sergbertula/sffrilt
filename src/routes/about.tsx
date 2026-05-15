import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Heart,
  Zap,
  Users,
  Code2,
  Brain,
  Palette,
  Server,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";
import { Stats } from "@/components/sections/Stats";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании — SFFRILT" },
      {
        name: "description",
        content:
          "SFFRILT — команда инженеров и AI-разработчиков. Делаем автоматизацию, ботов и сайты под ключ с 2021 года.",
      },
      { property: "og:title", content: "О компании SFFRILT" },
      {
        property: "og:description",
        content: "Команда, ценности и подход SFFRILT к разработке AI-продуктов.",
      },
    ],
  }),
  component: Page,
});

const values = [
  {
    icon: Target,
    title: "Результат, а не процесс",
    desc: "Меряем успех в деньгах клиента: заявках, выручке, сэкономленных часах. Не в строчках кода.",
  },
  {
    icon: Heart,
    title: "Честность важнее сделки",
    desc: "Скажем «вам это не нужно», если задача решается без нас. Лучше потерять чек, чем доверие.",
  },
  {
    icon: Zap,
    title: "Скорость как преимущество",
    desc: "Двухнедельные спринты, демо по пятницам, решения за часы — не за недели согласований.",
  },
  {
    icon: Users,
    title: "Партнёрство вдолгую",
    desc: "70% клиентов остаются на поддержке и развитии. Не «сдал и забыл», а растём вместе.",
  },
];

const team = [
  {
    icon: Brain,
    role: "AI-инженеры",
    count: "4 чел.",
    desc: "LLM, RAG, fine-tuning, vector DB. Опыт с GPT-4, Claude, Llama, YandexGPT.",
  },
  {
    icon: Code2,
    role: "Full-stack разработчики",
    count: "5 чел.",
    desc: "TypeScript, React, Node.js, Python, Go. Senior-уровень с 5+ лет в продакшене.",
  },
  {
    icon: Palette,
    role: "Дизайнеры",
    count: "2 чел.",
    desc: "UX/UI, брендинг, motion. Делаем интерфейсы, которые не стыдно показать.",
  },
  {
    icon: Server,
    role: "DevOps и QA",
    count: "2 чел.",
    desc: "Cloudflare, AWS, Docker, K8s. Мониторинг, безопасность, нагрузочное тестирование.",
  },
];

const milestones = [
  { year: "2021", title: "Основание", desc: "Запустились как студия Telegram-ботов и автоматизации." },
  { year: "2022", title: "Первый AI-проект", desc: "Внедрили GPT в клиентскую поддержку — 60+ часов в неделю экономии." },
  { year: "2023", title: "Команда из 8", desc: "Выросли до full-cycle команды: дизайн, бэкенд, AI, DevOps." },
  { year: "2024", title: "50+ проектов", desc: "Запустили AI-агентов для медицины, EdTech и e-commerce." },
  { year: "2026", title: "13 человек", desc: "Открыли направление SEO и работаем с клиентами по всей РФ и СНГ." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="О нас"
        title={
          <>
            Команда, которая делает{" "}
            <span className="text-gradient">AI-продукты под ключ</span>
          </>
        }
        description="SFFRILT — 13 инженеров, дизайнеров и AI-разработчиков. С 2021 года запускаем автоматизацию, ботов и сайты для бизнеса в России и СНГ."
      />

      <Stats />

      {/* Mission */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Миссия
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Делаем AI{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                рабочим инструментом
              </span>
              , а не игрушкой
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Большинство компаний боятся AI: «дорого», «непонятно», «не для нашего бизнеса».
              Мы доказываем обратное — внедряем AI там, где он реально окупается за 2–3 месяца.
              Без хайпа, без обещаний «революции», только конкретные процессы и метрики.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ценности"
            title="Во что мы верим"
            description="4 принципа, на которых строится каждый проект и каждый разговор с клиентом."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <GlassCard key={v.title} className="h-full">
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Команда"
            title="13 человек, full-cycle"
            description="Без подрядчиков и аутсорса. Все компетенции внутри команды — отвечаем за результат целиком."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <GlassCard key={t.role} className="h-full text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <t.icon className="h-6 w-6" />
                </span>
                <div className="mt-5 font-display text-2xl font-bold text-gradient">{t.count}</div>
                <h3 className="mt-1 font-display text-base font-semibold text-foreground">{t.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Путь"
            title="Как мы росли"
            description="От студии ботов на двоих до full-cycle команды с собственным AI-стеком."
          />
          <div className="relative mt-14 mx-auto max-w-3xl">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 sm:gap-10 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/20 sm:left-1/2" />
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="ml-12 flex-1 sm:ml-0 sm:w-1/2 sm:px-6">
                    <GlassCard hover={false}>
                      <div className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {m.year}
                      </div>
                      <h3 className="mt-2 font-display text-base font-semibold text-foreground">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Хотите познакомиться?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Назначим короткий созвон, разберём вашу задачу и покажем, чем можем помочь.
          </p>
          <div className="mt-8">
            <Link
              to="/contacts"
              className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-7 py-3.5 font-medium text-primary-foreground glow-blue transition-all hover:scale-[1.02]"
            >
              Связаться с командой
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
