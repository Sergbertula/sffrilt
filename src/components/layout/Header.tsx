import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Главная" },
  { to: "/ai-solutions", label: "AI-решения" },
  { to: "/telegram-bots", label: "Telegram-боты" },
  { to: "/web-development", label: "Разработка сайтов" },
  { to: "/seo", label: "SEO" },
  { to: "/cases", label: "Кейсы" },
  { to: "/blog", label: "Блог" },
  { to: "/pricing", label: "Цены" },
  { to: "/about", label: "О нас" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 glass-strong">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg gradient-primary glow-blue">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-gradient">
            SFFRILT
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
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

        <div className="hidden lg:block">
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
