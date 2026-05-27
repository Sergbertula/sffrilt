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
      { title: "SFFRILT — AI-автоматизация, Telegram-боты и сайты" },
      {
        name: "description",
        content:
          "Разрабатываем AI-системы, Telegram-ботов и сайты для автоматизации бизнеса и роста заявок.",
      },
      { property: "og:title", content: "SFFRILT — AI-автоматизация бизнеса" },
      {
        property: "og:description",
        content: "AI-агенты, Telegram-боты, сайты и SEO для роста бизнеса.",
      },
    ],
    scripts: [ldScript(ORGANIZATION_SCHEMA)],
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
