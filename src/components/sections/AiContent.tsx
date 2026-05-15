import {
  Bot,
  BrainCircuit,
  FileSearch,
  Headphones,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/glass-card";

const aiServices = [
  {
    icon: MessageSquare,
    title: "AI-чат-ассистенты",
    desc: "Умные операторы для сайта, мессенджеров и внутренних систем. Отвечают по вашей базе знаний 24/7.",
  },
  {
    icon: Headphones,
    title: "Голосовые AI-операторы",
    desc: "Принимают входящие звонки, записывают на услуги, обзванивают базу с понятным человеческим голосом.",
  },
  {
    icon: FileSearch,
    title: "AI-поиск по документам (RAG)",
    desc: "Подключаем ваши регламенты, договоры, базы знаний — модель отвечает только на основе ваших данных.",
  },
  {
    icon: Workflow,
    title: "AI-автоматизация процессов",
    desc: "Классификация заявок, маршрутизация, авто-ответы, обработка email и форм. Связки в n8n / Make.",
  },
  {
    icon: LineChart,
    title: "AI-аналитика и отчёты",
    desc: "Дашборды, прогнозы спроса, скоринг клиентов, выявление аномалий в данных и операциях.",
  },
  {
    icon: ShieldCheck,
    title: "On-premise и приватные модели",
    desc: "Llama, Qwen, YandexGPT на вашей инфраструктуре. Когда данные нельзя выпускать наружу.",
  },
];

const industries = [
  { name: "Логистика и доставка", task: "Маршрутизация заявок, OCR накладных, прогноз сроков" },
  { name: "Медицина", task: "Запись на приём, расшифровка консультаций, проверка анализов" },
  { name: "EdTech", task: "Проверка домашних заданий, AI-тьюторы, генерация материалов" },
  { name: "Ритейл и FMCG", task: "Подбор товаров, персонализация, прогноз продаж" },
  { name: "Производство", task: "Контроль качества по фото, предиктивное обслуживание" },
  { name: "Финансы и юристы", task: "Анализ договоров, антифрод, помощь в составлении документов" },
];

export function AiContent() {
  return (
    <>
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Что мы умеем"
            title="6 направлений AI-разработки"
            description="От простых чат-ботов до промышленных систем с собственными моделями."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((s) => (
              <GlassCard key={s.title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Отрасли"
            title="Где AI приносит результат"
            description="Подбираем сценарии под специфику вашей индустрии — от первого пилота до тиражирования."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:border-primary/40 hover:-translate-y-0.5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <BrainCircuit className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{ind.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ind.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <GlassCard hover={false} className="text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
              <Bot className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Не уверены, нужен ли вам AI?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              За 30 минут на созвоне разберём ваши процессы и честно скажем, где AI даст эффект, а где это будет дорогая игрушка. Без обязательств.
            </p>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
