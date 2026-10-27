import { createFileRoute } from "@tanstack/react-router";
import { ORGANIZATION_SCHEMA, ldScript } from "@/lib/schema";
import { faqs } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { JuliaSection } from "@/components/sections/JuliaSection";
import { Cases } from "@/components/sections/Cases";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Compare } from "@/components/sections/Compare";
import { Integrations } from "@/components/sections/Integrations";
import { Guarantees } from "@/components/sections/Guarantees";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactForm } from "@/components/sections/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Автоматизация бизнеса с помощью ИИ (AI) под ключ — SFFRILT" },
      {
        name: "description",
        content:
          "Внедряем ИИ (AI) в бизнес под ключ: от 150 000 ₽, MVP за 2–4 недели, гарантия 6 мес. Telegram-боты, чат-боты для приёма заявок, ИИ-агенты и сайты.",
      },
      { property: "og:title", content: "Автоматизация бизнеса с помощью ИИ (AI) под ключ — SFFRILT" },
      {
        property: "og:description",
        content: "Telegram-боты, чат-боты, ИИ-агенты и сайты для бизнеса. От 150 000 ₽, MVP за 2–4 недели, гарантия 6 месяцев.",
      },
    ],
    scripts: [
      ldScript(ORGANIZATION_SCHEMA),
      ldScript({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <Services />
      <JuliaSection />
      <Cases />
      <Industries />
      <Testimonials />
      <WhyUs />
      <Process />
      <Compare />
      <Integrations />
      <Guarantees />
      <Faq />
      <CtaBanner />
      <ContactForm />
    </>
  );
}
