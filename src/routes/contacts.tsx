import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Контакты SFFRILT",
  publisher: {
    "@type": "Organization",
    name: "SFFRILT",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+7-953-421-02-56",
        email: "tehprom-tula@mail.ru",
        availableLanguage: ["ru"],
        url: "https://t.me/tehprom1",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:00",
        },
      },
    ],
  },
};

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — SFFRILT" },
      {
        name: "description",
        content: "Свяжитесь с SFFRILT: Telegram, e-mail, телефон. Оставьте заявку — ответим за час.",
      },
      { property: "og:title", content: "Контакты SFFRILT" },
      { property: "og:description", content: "Обсудим ваш проект — ответим в течение часа." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title={
          <>
            Свяжитесь <span className="text-gradient">с командой SFFRILT</span>
          </>
        }
        description="Опишите задачу — предложим решение и оценку. Отвечаем в течение часа в рабочее время."
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
