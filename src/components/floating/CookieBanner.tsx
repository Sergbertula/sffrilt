import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const KEY = "sffrilt_cookies_accepted";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  function accept() {
    localStorage.setItem(KEY, "1");
    setShow(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60 glass-strong">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 pr-16 sm:pr-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-primary">
            <Cookie className="h-4 w-4 text-primary-foreground" />
          </span>
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Сайт использует cookies для улучшения работы.{" "}
            <Link to="/cookies" className="text-primary hover:underline">
              Подробнее
            </Link>
            .
          </p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <button
            onClick={accept}
            className="flex-1 rounded-lg gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:scale-105 transition-transform sm:flex-none sm:text-sm"
          >
            Принять
          </button>
          <button
            onClick={accept}
            aria-label="Закрыть"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
