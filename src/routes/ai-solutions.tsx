import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title: "AI-решения для бизнеса — SFFRILT" },
      {
        name: "description",
        content:
          "AI-агенты, AI-консультанты, AI для производства и продаж, интеграции и аналитика.",
      },
      { property: "og:title", content: "AI-решения для бизнеса — SFFRILT" },
      {
        property: "og:description",
        content: "Внедрение AI-систем для автоматизации процессов и роста выручки.",
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
        description="Разрабатываем и внедряем AI-агентов, консультантов и аналитические системы. От пилота до промышленной эксплуатации."
      />
      <Services />
      <ContactForm />
    </>
  );
}
