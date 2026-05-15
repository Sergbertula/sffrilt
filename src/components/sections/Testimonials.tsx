import { Quote, Star } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Алексей Корнев",
    role: "Директор по операциям",
    company: "Самокат Северо-Запад",
    initials: "АК",
    rating: 5,
    text: "За 2 месяца команда SFFRILT собрала AI-диспетчера, который снял с операторов 60% типовых обращений. Главное — не просто внедрили модель, а перестроили процесс целиком и научили ребят им управлять.",
  },
  {
    name: "Мария Соловьёва",
    role: "Коммерческий директор",
    company: "ДомТех",
    initials: "МС",
    rating: 5,
    text: "Telegram-бот окупился в первый месяц. Удобный поиск по 12 тысячам SKU и оплата ЮKassa внутри чата дали нам ×2.4 заявок без увеличения рекламного бюджета. Заказы сразу в 1С — менеджеры не дублируют ничего вручную.",
  },
  {
    name: "Дмитрий Лазарев",
    role: "Главврач",
    company: "Клиника Айболит",
    initials: "ДЛ",
    rating: 5,
    text: "Голосовой администратор отвечает на звонки в 2 ночи и записывает пациентов сам. Минус 82% пропущенных звонков и реальный рост загрузки врачей. Команда внимательно подходила к голосу и сценариям — звучит по-человечески.",
  },
  {
    name: "Ольга Петрова",
    role: "CIO",
    company: "ЭкоМаркет",
    initials: "ОП",
    rating: 5,
    text: "Запустили B2B-портал с ЭДО и SAP за 4 месяца — это рекорд для нашей индустрии. Прозрачно вели проект, каждую неделю демо, без сюрпризов. Теперь масштабируем на соседние регионы.",
  },
];

export function Testimonials() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SFFRILT",
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
      reviewBody: t.text,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length,
      bestRating: 5,
    },
  };

  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute left-1/2 top-1/3 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят клиенты"
          description="Реальные руководители реальных компаний — без актёров и стоковых фото."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary/40" />
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                «{t.text}»
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 font-display text-sm font-bold text-foreground ring-1 ring-primary/20">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
