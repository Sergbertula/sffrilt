import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "sffrilt_cookies_accepted";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-4 sm:left-auto sm:right-6 sm:max-w-md">
      <div className="glass-strong rounded-2xl p-4 shadow-elegant">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-primary">
            <Cookie className="h-4 w-4 text-primary-foreground" />
          </span>
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Сайт использует cookies для улучшения работы сайта.
            </p>
            <div className="mt-3 flex justify-end">
              <button
                onClick={() => {
                  localStorage.setItem(KEY, "1");
                  setShow(false);
                }}
                className="rounded-lg gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:scale-105 transition-transform"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
