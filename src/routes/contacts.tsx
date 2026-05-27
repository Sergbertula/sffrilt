import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/sections/ContactForm";
import { toast } from "sonner";
import { ChevronDown, Copy } from "lucide-react";

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
      <B2BDetails />
    </>
  );
}

const requisites = [
  { label: "Название", value: "ООО «Техпром»" },
  { label: "ОГРН", value: "1057100770231" },
  { label: "ИНН", value: "7106063765" },
  { label: "КПП", value: "710601001" },
  { label: "Юридический адрес", value: "300048, г. Тула, Красноармейский пр-т, д. 7" },
];

function B2BDetails() {
  const [open, setOpen] = useState(false);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Скопировано в буфер обмена");
    } catch {
      toast.error("Не удалось скопировать");
    }
  }

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl glass-strong">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-primary/5"
          >
            <span className="font-display text-lg font-semibold text-foreground">
              Реквизиты для B2B
            </span>
            <ChevronDown
              className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="border-t border-border px-6 py-5 space-y-3">
              {requisites.map((item) => (
                <button
                  key={item.label}
                  onClick={() => copy(item.value)}
                  className="group flex w-full items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 text-left transition-colors hover:border-primary/30 hover:bg-primary/5"
                  title="Нажмите, чтобы скопировать"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <Copy className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
