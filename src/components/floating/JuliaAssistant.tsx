import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "julia"; text: string };

const intro: Msg[] = [
  {
    role: "julia",
    text: "Здравствуйте! Я Юлия — цифровой помощник SFFRILT. Помогу подобрать услугу, оставить заявку или связаться со специалистом.",
  },
];

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
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const v = text.trim();
    if (!v) return;
    setMessages((m) => [...m, { role: "user", text: v }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "julia",
          text: "Спасибо! Передам ваш запрос специалисту. Для быстрого ответа напишите нам в Telegram @tehprom1 или оставьте заявку через форму на сайте.",
        },
      ]);
    }, 600);
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
                    onClick={() => send(q)}
                    className="rounded-full border border-border bg-card/40 px-2.5 py-1 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Напишите сообщение…"
                  className="flex-1 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
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
