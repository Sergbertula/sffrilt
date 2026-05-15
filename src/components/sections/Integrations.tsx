import { SectionHeading } from "@/components/ui/glass-card";

const groups = [
  {
    title: "AI-модели",
    items: ["OpenAI GPT-4o", "Claude 3.5", "Gemini", "Llama 3", "Qwen", "YandexGPT", "Whisper"],
  },
  {
    title: "CRM и ERP",
    items: ["Bitrix24", "amoCRM", "1С", "SAP", "HubSpot", "Salesforce", "Мой склад"],
  },
  {
    title: "Мессенджеры и связь",
    items: ["Telegram", "WhatsApp Business", "VK", "Voximplant", "SMS.ru", "Mango Office"],
  },
  {
    title: "Платежи и документы",
    items: ["ЮKassa", "Тинькофф", "Stripe", "Контур.Диадок", "СберБизнес", "ЭДО Lite"],
  },
  {
    title: "Инфраструктура",
    items: ["Cloudflare", "Supabase", "PostgreSQL", "Redis", "Docker", "n8n", "Make"],
  },
];

export function Integrations() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Интеграции"
          title="С чем мы работаем"
          description="40+ готовых коннекторов. Если вашего нет в списке — пишем за 1–3 дня."
        />
        <div className="mt-14 space-y-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl glass p-5 sm:p-6"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                {g.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
