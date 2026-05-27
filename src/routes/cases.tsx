import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Cases } from "@/components/sections/Cases";
import { ContactForm } from "@/components/sections/ContactForm";
import { caseCategories, type CaseCategory } from "@/data/cases";

interface CasesSearch {
  category?: CaseCategory;
}

export const Route = createFileRoute("/cases")({
  validateSearch: (search: Record<string, unknown>): CasesSearch => {
    const c = search.category;
    return {
      category:
        typeof c === "string" && (caseCategories as readonly string[]).includes(c)
          ? (c as CaseCategory)
          : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Кейсы — SFFRILT" },
      {
        name: "description",
        content: "Реальные проекты SFFRILT: AI, Telegram-боты, сайты и автоматизация бизнеса.",
      },
      { property: "og:title", content: "Кейсы SFFRILT — реальные результаты AI-автоматизации" },
      {
        property: "og:description",
        content: "−68% времени обработки, ×2.4 заявок, −82% пропущенных звонков. Смотрите реальные кейсы.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Кейсы"
        title={
          <>
            Проекты с <span className="text-gradient">измеримым результатом</span>
          </>
        }
        description="Подборка кейсов SFFRILT: что внедрили, как это работает и какой эффект получили клиенты."
      />
      <Cases initialCategory={category} />
      <ContactForm />
    </>
  );
}
