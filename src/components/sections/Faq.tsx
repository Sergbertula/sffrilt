import { SectionHeading } from "@/components/ui/glass-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Сколько стоит разработка AI-агента или Telegram-бота?",
    a: "Стартовые проекты — от 150 000 ₽, средние внедрения с интеграциями в CRM/1С — 400–900 тыс. ₽, крупные системы под ключ — индивидуально. Точную смету присылаем после 30-минутного созвона.",
  },
  {
    q: "Сколько занимает запуск проекта?",
    a: "Telegram-бот с типовой логикой — 2–3 недели. AI-ассистент с RAG и интеграциями — 4–8 недель. Корпоративный портал — от 2 месяцев. Параллельно ведём 2–3 проекта без потери качества.",
  },
  {
    q: "На каких моделях вы работаете?",
    a: "OpenAI GPT-4o / o1, Anthropic Claude 3.5, Google Gemini, локальные Llama / Qwen, Whisper для распознавания речи. Подбираем стек под задачу — где-то нужна точность, где-то цена и приватность.",
  },
  {
    q: "А мои данные не утекут в OpenAI?",
    a: "Для чувствительных данных используем on-premise модели (Llama, Qwen, YandexGPT) на ваших серверах или включаем zero-retention режим в API. Все интеграции и доступы документируем, политики приватности — на вашей стороне.",
  },
  {
    q: "Что с поддержкой после запуска?",
    a: "Подписываем SLA: реакция в течение 1–4 часов, бесплатные мелкие правки в первый месяц. Дальше — пакеты поддержки или оплата по часам. Все системы покрыты мониторингом и алертами.",
  },
  {
    q: "Можно ли интегрировать с моей CRM / 1С / amoCRM?",
    a: "Да. У нас готовые коннекторы к Bitrix24, amoCRM, 1С, Salesforce, HubSpot, SAP, Telegram, WhatsApp Business, ЮKassa, Тинькофф и десяткам других сервисов. Если коннектора нет — пишем за 1–3 дня.",
  },
];

export function Faq() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Частые вопросы"
          description="Если вашего вопроса нет — напишите нам, ответим в течение часа."
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass border-0 px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
