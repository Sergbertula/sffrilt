import {
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building2,
  Wrench,
  Utensils,
  Plane,
  Scale,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/glass-card";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce и ритейл",
    desc: "AI-консультанты, автоответы в WhatsApp/Telegram, парсинг конкурентов, CRM-аналитика.",
  },
  {
    icon: Stethoscope,
    title: "Медицина и клиники",
    desc: "Запись к врачу через бота, напоминания, обработка анализов, ФЗ-152 и медицинская тайна.",
  },
  {
    icon: GraduationCap,
    title: "Образование и EdTech",
    desc: "AI-тьюторы, проверка домашек, LMS-платформы, автоматическая выдача сертификатов.",
  },
  {
    icon: Building2,
    title: "Недвижимость и стройка",
    desc: "Подбор объектов, AI-обзвон лидов, CRM с интеграцией ЦИАН/Авито, квиз-лендинги.",
  },
  {
    icon: Wrench,
    title: "Услуги и сервисы",
    desc: "Онлайн-запись, расчёт стоимости через бота, напоминания, отзывы и реактивация клиентов.",
  },
  {
    icon: Utensils,
    title: "HoReCa и доставка",
    desc: "Боты заказов, интеграция с iiko/r_keeper, программы лояльности, AI-меню по предпочтениям.",
  },
  {
    icon: Plane,
    title: "Туризм и логистика",
    desc: "Подбор туров, AI-поиск рейсов, трекинг отправлений, мультиязычная поддержка 24/7.",
  },
  {
    icon: Scale,
    title: "Юридические услуги",
    desc: "AI-консультант по типовым вопросам, генерация документов, разбор договоров на риски.",
  },
];

export function Industries() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Отрасли"
          title="С кем мы работаем"
          description="У нас есть готовые сценарии и кейсы под основные отрасли — экономим вам недели на проектировании."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                {i.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
