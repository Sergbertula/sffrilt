import { createFileRoute } from "@tanstack/react-router";
import { serviceSchema, ldScript } from "@/lib/schema";
import { PageHero } from "@/components/layout/PageHero";
import { AiContent } from "@/components/sections/AiContent";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI-решения для бизнеса — SFFRILT" },
      {
        name: "description",
        content:
          "AI-агенты, голосовые операторы, RAG-поиск, аналитика и приватные модели. Внедряем AI под задачи бизнеса.",
      },
      { property: "og:title", content: "AI-решения для бизнеса — SFFRILT" },
      {
        property: "og:description",
        content: "Чат- и голосовые AI-ассистенты, RAG, аналитика, on-premise модели.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI-решения"
        title={
          <>
            AI для <span className="text-gradient">реальных бизнес-задач</span>
          </>
        }
        description="Разрабатываем и внедряем AI-агентов, голосовых операторов и аналитические системы. От пилота за 2 недели до промышленной эксплуатации."
      />
      <AiContent />
      <ContactForm />
    </>
  );
}

