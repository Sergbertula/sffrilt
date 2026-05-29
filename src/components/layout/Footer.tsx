import { Link } from "@tanstack/react-router";
import { Phone, Mail, Send, Sparkles, Instagram, MessageCircle, Copy } from "lucide-react";
import { toast } from "sonner";
import { handleYMClick } from "@/lib/metrika";

const services = [
  { to: "/ai-solutions", label: "AI-решения" },
  { to: "/telegram-bots", label: "Telegram-боты" },
  { to: "/web-development", label: "Разработка сайтов" },
  { to: "/seo", label: "SEO-продвижение" },
] as const;

const company = [
  { to: "/about", label: "О нас" },
  { to: "/cases", label: "Кейсы" },
  { to: "/blog", label: "Блог" },
  { to: "/pricing", label: "Цены" },
  { to: "/contacts", label: "Контакты" },
] as const;

const docs = [
  { to: "/privacy", label: "Политика конфиденциальности" },
  { to: "/cookies", label: "Использование cookies" },
  { to: "/terms", label: "Пользовательское соглашение" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-card/40">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary glow-blue">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-xl font-bold text-gradient">SFFRILT</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Разрабатываем AI-системы, Telegram-ботов и сайты, которые помогают компаниям
            автоматизировать процессы и увеличивать поток клиентов.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href="tel:+79534210256"
                onClick={handleYMClick('phone_click', 'tel:+79534210256')}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                +7 (953) 421-02-56
              </a>
            </li>
            <li>
              <a
                href="https://t.me/tehprom1"
                target="_blank"
                rel="noreferrer"
                onClick={handleYMClick('telegram_click', 'https://t.me/tehprom1', '_blank')}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Send className="h-4 w-4 text-primary" />
                @tehprom1
              </a>
            </li>
            <li>
              <a
                href="https://max.ru/tehprom"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                MAX: @tehprom
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/tehpromtula"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-4 w-4 text-primary" />
                @tehpromtula
              </a>
            </li>
            <li>
              <a
                href="mailto:tehprom-tula@mail.ru"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    await navigator.clipboard.writeText("tehprom-tula@mail.ru");
                    toast.success("Email скопирован!");
                  } catch {
                    const ta = document.createElement("textarea");
                    ta.value = "tehprom-tula@mail.ru";
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand("copy");
                    document.body.removeChild(ta);
                    toast.success("Email скопирован!");
                  }
                  window.location.href = "mailto:tehprom-tula@mail.ru";
                }}
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>tehprom-tula@mail.ru</span>
                <Copy className="h-3 w-3 text-muted-foreground/60 transition-colors group-hover:text-primary" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Услуги
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="text-muted-foreground hover:text-foreground">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Компания
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {company.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className="text-muted-foreground hover:text-foreground">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Документы
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {docs.map((d) => (
              <li key={d.to}>
                <Link to={d.to} className="text-muted-foreground hover:text-foreground">
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SFFRILT. Все права защищены.</p>
          <p>AI-автоматизация · Telegram-боты · Web-разработка · SEO</p>
        </div>
      </div>

      <div className="border-t border-border/60 bg-card/60">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-[11px] leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
          <p className="font-medium text-foreground/80">ООО «Техпром»</p>
          <p className="mt-1">
            ОГРН 1057100770231 · ИНН 7106063765 · КПП 710601001
          </p>
        </div>
      </div>
    </footer>
  );
}
