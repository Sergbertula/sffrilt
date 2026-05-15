import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — SFFRILT" },
      {
        name: "description",
        content: "Свяжитесь с SFFRILT: телефон, Telegram, e-mail. Оставьте заявку онлайн.",
      },
      { property: "og:title", content: "Контакты SFFRILT" },
      { property: "og:description", content: "Обсудим ваш проект — ответим в течение часа." },
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
      <ContactForm />
    </>
  );
}
