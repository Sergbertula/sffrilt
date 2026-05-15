import { Workflow, Bot, BrainCircuit, Globe, FileStack, GraduationCap, type LucideIcon } from "lucide-react";

export type CaseCategory = "AI" | "Telegram" | "Web" | "Автоматизация";

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  category: CaseCategory;
  tag: string;
  icon: LucideIcon;
  title: string;
  short: string;
  duration: string;
  headlineMetric: string;
  metrics: CaseMetric[];
  task: string;
  solution: string;
  stack: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "samokat-szfo-ai-dispatcher",
    client: "Самокат Северо-Запад",
    industry: "Логистика и доставка",
    category: "AI",
    tag: "AI · Поддержка",
    icon: BrainCircuit,
    title: "AI-диспетчер заявок поддержки",
    short: "GPT классифицирует и маршрутизирует 4 000+ обращений в сутки, 60% решает автоматически.",
    duration: "2 месяца",
    headlineMetric: "−68% времени обработки",
    metrics: [
      { value: "−68%", label: "Время обработки заявки" },
      { value: "60%", label: "Авто-ответы без оператора" },
      { value: "+24", label: "NPS поддержки" },
    ],
    task: "Операторы вручную сортировали более 4 000 обращений в сутки из чатов, почты и форм. Заявки терялись, SLA на первый ответ постоянно нарушался, выгорание команды росло.",
    solution: "Развернули единый шлюз обращений и подключили GPT-классификатор: модель определяет тему, тональность и приоритет, маршрутизирует в нужный отдел Bitrix24 и сразу отвечает на 60% типовых вопросов из базы знаний. Сложные кейсы получают краткое саммари для оператора.",
    stack: ["OpenAI GPT-4o", "n8n", "Bitrix24", "PostgreSQL", "Redis"],
  },
  {
    slug: "domteh-telegram-bot",
    client: "ДомТех",
    industry: "Стройматериалы, B2C",
    category: "Telegram",
    tag: "Telegram · Продажи",
    icon: Bot,
    title: "Telegram-бот продаж с каталогом 12 000 SKU",
    short: "Поиск, корзина, оплата ЮKassa и выгрузка заказов прямо в 1С.",
    duration: "3 недели",
    headlineMetric: "×2.4 заявок",
    metrics: [
      { value: "×2.4", label: "Рост заявок за квартал" },
      { value: "380%", label: "ROI за первый квартал" },
      { value: "12k", label: "SKU в каталоге бота" },
    ],
    task: "Каталог из 12 000 позиций жил в 1С, заявки приходили в личные сообщения менеджерам и регулярно терялись. Не было прозрачной воронки и оплаты онлайн.",
    solution: "Собрали Telegram-бота с поиском по каталогу, фильтрами, корзиной и оплатой ЮKassa. Заказы автоматически уходят в 1С:Управление торговлей, статусы возвращаются клиенту в чат. Менеджер видит весь путь клиента в админке.",
    stack: ["aiogram 3", "Redis", "1С:УТ", "ЮKassa", "Docker"],
  },
  {
    slug: "ayboit-voice-ai-admin",
    client: "Клиника Айболит",
    industry: "Медицина",
    category: "AI",
    tag: "AI · Голос",
    icon: BrainCircuit,
    title: "Голосовой AI-администратор клиники",
    short: "Принимает звонки 24/7, записывает на приём и пишет в МИС.",
    duration: "6 недель",
    headlineMetric: "−82% пропущенных звонков",
    metrics: [
      { value: "−82%", label: "Пропущенных звонков" },
      { value: "5 мес", label: "Срок окупаемости" },
      { value: "24/7", label: "Доступность записи" },
    ],
    task: "До 30% звонков терялось вне рабочих часов администратора, часть пациентов уходила к конкурентам. Ручная запись через колл-центр давала ошибки в расписании врачей.",
    solution: "Подняли голосового AI-администратора на Voximplant + Whisper + GPT-4o: бот понимает естественную речь, проверяет свободные слоты в МИС Medesk, записывает пациента и присылает СМС-подтверждение. Сложные обращения переводит на живого оператора.",
    stack: ["Voximplant", "Whisper", "GPT-4o", "МИС Medesk", "SMS.ru"],
  },
  {
    slug: "ecomarket-b2b-portal",
    client: "ЭкоМаркет",
    industry: "FMCG, B2B-дистрибуция",
    category: "Web",
    tag: "Web · B2B",
    icon: Globe,
    title: "B2B-портал для 1 200 поставщиков",
    short: "Личный кабинет, ЭДО и синхронизация с SAP вместо Excel и почты.",
    duration: "4 месяца",
    headlineMetric: "+47% оборот",
    metrics: [
      { value: "+47%", label: "Оборот через канал" },
      { value: "1 200", label: "Активных поставщиков" },
      { value: "−5×", label: "Ошибок в накладных" },
    ],
    task: "Заказы и документы шли через email и Excel-файлы. Ошибки появлялись в каждой пятой накладной, на сверку уходили дни, масштабировать сеть поставщиков было невозможно.",
    solution: "Спроектировали и запустили B2B-портал: личный кабинет поставщика, прайсы, заказы, статусы поставок, ЭДО через Контур.Диадок и двусторонняя синхронизация с SAP. Внутри — ролевой доступ, аудит и аналитика по каждому контрагенту.",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "SAP", "Контур.Диадок"],
  },
  {
    slug: "promlogistika-rpa-docs",
    client: "ПромЛогистика",
    industry: "Грузоперевозки",
    category: "Автоматизация",
    tag: "Автоматизация · OCR",
    icon: FileStack,
    title: "Автоматизация документооборота с OCR",
    short: "RPA + OCR собирает накладные и акты из 4 систем без участия людей.",
    duration: "10 недель",
    headlineMetric: "−340 часов/мес ручной работы",
    metrics: [
      { value: "−340 ч", label: "Ручной работы в месяц" },
      { value: "4", label: "Интегрированных системы" },
      { value: "98%", label: "Точность распознавания" },
    ],
    task: "Бухгалтерия и логисты вручную собирали накладные, акты и счета из 4 систем и почты. Закрытие месяца занимало 8 рабочих дней и сопровождалось ошибками.",
    solution: "Разработали RPA-сценарии в n8n: бот забирает документы из почты и Google Drive, прогоняет через OCR, валидирует поля, сверяет с реестрами и формирует пакет в 1С. Все исключения уходят ответственному в Telegram.",
    stack: ["n8n", "Tesseract OCR", "1С", "Google Drive API", "Telegram Bot API"],
  },
  {
    slug: "yasno-ai-tutor",
    client: "Школа Ясно",
    industry: "EdTech",
    category: "AI",
    tag: "AI · Обучение",
    icon: GraduationCap,
    title: "AI-тьютор для проверки домашних заданий",
    short: "Проверяет задачи, объясняет ошибки и ведёт прогресс 14 000 учеников.",
    duration: "8 недель",
    headlineMetric: "+31% к удержанию",
    metrics: [
      { value: "14 000", label: "Активных учеников" },
      { value: "+31%", label: "Удержание ученика" },
      { value: "×6", label: "Скорость проверки ДЗ" },
    ],
    task: "Преподаватели не успевали проверять домашние задания в срок, ученики теряли мотивацию, родители жаловались на медленную обратную связь.",
    solution: "Построили AI-тьютора на Claude: ученик отправляет решение, модель проверяет логику, объясняет ошибку шаг за шагом и предлагает похожую задачу. Преподаватель видит дашборд прогресса и тратит время только на сложные случаи.",
    stack: ["Claude 3.5", "Supabase", "Next.js", "Stripe", "PostHog"],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
