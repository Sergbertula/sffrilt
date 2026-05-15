import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { notifyLead } from "@/lib/telegram.functions";

type Msg = { role: "user" | "julia"; text: string };

const intro: Msg[] = [
  {
    role: "julia",
    text: "Здравствуйте! Я Юлия — цифровой помощник SFFRILT. Помогу подобрать услугу, оставить заявку или связаться со специалистом.",
  },
  {
    role: "julia",
    text: "Опишите задачу в одном сообщении — затем я попрошу контакт (Telegram, телефон или email), чтобы специалист мог с вами связаться.",
  },
];

// Принимаем: @username, +телефон (мин. 7 цифр), email
const contactRegex =
  /(@[a-zA-Z0-9_]{3,})|(\+?\d[\d\s().-]{6,}\d)|([^\s@]+@[^\s@]+\.[^\s@]{2,})/;

function looksLikeContact(text: string) {
  return contactRegex.test(text.trim());
}

const quickReplies = [
  "Хочу AI-агента",
  "Нужен Telegram-бот",
  "Разработка сайта",
  "SEO-продвижение",
];

export function JuliaAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(intro);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const sendLeadNotification = useServerFn(notifyLead);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const [contact, setContact] = useState<string | null>(null);
  const [pendingTask, setPendingTask] = useState<string | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function submitLead(taskText: string, contactValue: string) {
    const source =
      typeof window !== "undefined"
        ? `${window.location.pathname}${window.location.search}#julia-assistant`
        : "/#julia-assistant";

    try {
      setSending(true);
      const result = await sendLeadNotification({
        data: {
          name: "Юлия — чат",
          contact: contactValue,
          task: taskText,
          source,
        },
      });

      console.log("[JuliaAssistant] notifyLead result", result);

      setMessages((m) => [
        ...m,
        {
          role: "julia",
          text: result?.ok
            ? "Спасибо! Передала заявку специалисту — мы свяжемся с вами в ближайшее время. Если срочно — пишите в Telegram @tehprom1."
            : "Сообщение принято, но уведомление могло не дойти. Лучше сразу напишите нам в Telegram @tehprom1.",
        },
      ]);
    } catch (error) {
      console.error("[JuliaAssistant] notifyLead failed", error);
      setMessages((m) => [
        ...m,
        {
          role: "julia",
          text: "Не удалось передать запрос автоматически. Напишите нам в Telegram @tehprom1 — ответим быстрее.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  async function send(text: string) {
    const v = text.trim();
    if (!v || sending) return;

    setMessages((m) => [...m, { role: "user", text: v }]);
    setInput("");

    // Шаг 1: нет задачи — сохраняем как задачу и просим контакт
    if (!pendingTask && !contact) {
      setPendingTask(v);
      setMessages((m) => [
        ...m,
        {
          role: "julia",
          text: "Спасибо! Оставьте, пожалуйста, контакт для связи: Telegram (@username), телефон или email.",
        },
      ]);
      return;
    }

    // Шаг 2: ждём контакт
    if (!contact) {
      if (!looksLikeContact(v)) {
        setMessages((m) => [
          ...m,
          {
            role: "julia",
            text: "Кажется, это не похоже на контакт. Укажите, пожалуйста, Telegram (@username), телефон (+7...) или email.",
          },
        ]);
        return;
      }
      setContact(v);
      await submitLead(pendingTask ?? "(без описания)", v);
      setPendingTask(null);
      return;
    }

    // Контакт уже есть — отправляем как новый запрос
    await submitLead(v, contact);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Открыть чат с Юлией"
        className="group fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full glass-strong px-4 py-3 shadow-[0_0_30px_-8px_oklch(0.65_0.24_295/0.6)] transition-transform hover:scale-105"
      >
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full gradient-primary">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" />
        </span>
        <span className="hidden text-sm font-medium text-foreground sm:inline">
          💬 Юлия — AI-помощник
        </span>
        <span className="text-sm font-medium text-foreground sm:hidden">Юлия</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-0 sm:p-6">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex h-[100dvh] w-full flex-col glass-strong shadow-elegant sm:h-[600px] sm:max-h-[85vh] sm:w-[400px] sm:rounded-2xl">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full gradient-primary glow-blue">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                  <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-background" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Юлия</p>
                  <p className="text-xs text-muted-foreground">AI-помощник · онлайн</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
                className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-2xl gradient-primary px-4 py-2.5 text-sm text-primary-foreground"
                      : "max-w-[85%] rounded-2xl glass px-4 py-2.5 text-sm text-foreground"
                  }
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-border/60 px-4 pb-2 pt-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      void send(q);
                    }}
                    className="rounded-full border border-border bg-card/40 px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Напишите сообщение…"
                  disabled={sending}
                  className="flex-1 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-primary-foreground hover:scale-105"
                  aria-label="Отправить"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="pb-2 pt-2 text-center text-[10px] text-muted-foreground">
                Демо-чат · для срочной связи —{" "}
                <a href="https://t.me/tehprom1" className="text-primary hover:underline">
                  Telegram
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
