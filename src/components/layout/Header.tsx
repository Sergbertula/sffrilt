import { useState, useRef, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Bot, Send, Globe, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import logo3d from "@/assets/logo-3d.png";

const services = [
  { to: "/ai-solutions", label: "AI-решения", desc: "AI-агенты, RAG, автоматизация", icon: Bot },
  { to: "/telegram-bots", label: "Telegram-боты", desc: "Боты, Mini Apps, CRM", icon: Send },
  { to: "/web-development", label: "Разработка сайтов", desc: "Лендинги, SaaS, веб-сервисы", icon: Globe },
  { to: "/seo", label: "SEO-продвижение", desc: "Аудит, контент, линкбилдинг", icon: Search },
] as const;

const navItems = [
  { to: "/cases", label: "Кейсы" },
  { to: "/blog", label: "Блог" },
  { to: "/pricing", label: "Цены" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [services_open, setServicesOpen] = useState(false);
  const { location } = useRouterState();
  const dropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const isServiceActive = services.some((s) => s.to === location.pathname);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 glass-strong">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logo3d}
            alt="SFFRILT — AI-автоматизация бизнеса"
            width={36}
            height={36}
            className="h-9 w-9 object-contain drop-shadow-[0_0_12px_oklch(0.7_0.2_245/0.55)] transition-transform group-hover:scale-105"
          />
          <span className="font-display text-xl font-bold tracking-tight text-gradient">
            SFFRILT
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === "/"
                ? "text-foreground bg-secondary/60"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/40",
            )}
          >
            Главная
          </Link>

          <div className="relative" ref={dropRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isServiceActive || services_open
                  ? "text-foreground bg-secondary/60"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40",
              )}
            >
              Услуги
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", services_open && "rotate-180")}
              />
            </button>

            {services_open && (
              <div className="absolute left-0 top-full mt-2 w-[420px] overflow-hidden rounded-2xl glass-strong p-2 shadow-elegant ring-1 ring-border/60">
                <div className="grid gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/10"
                    >
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-sm font-semibold text-foreground">
                          {s.label}
                        </div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground bg-secondary/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end leading-tight">
            <a
              href="tel:+79534210256"
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              +7 (953) 421-02-56
            </a>
            <span className="hidden text-[11px] text-muted-foreground xl:block">
              300048, г. Тула, Красноармейский пр-т, д. 7
            </span>
          </div>
          <Link
            to="/contacts"
            className="inline-flex items-center justify-center rounded-lg gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_oklch(0.7_0.2_245/0.6)] transition-transform hover:scale-105"
          >
            Обсудить проект
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            >
              Главная
            </Link>
            <div className="mt-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              Услуги
            </div>
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              >
                <s.icon className="h-4 w-4 text-primary" />
                {s.label}
              </Link>
            ))}
            <div className="mt-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              Компания
            </div>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Обсудить проект
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
