import { useState, useEffect } from "react";
import { useSearch } from "@tanstack/react-router";
import { Check, X, Loader2 } from "lucide-react";

export default function UnsubscribePage() {
  const search = useSearch({ from: "/unsubscribe" });
  const token = (search as any).token as string | undefined;

  const [status, setStatus] = useState<"loading" | "valid" | "already" | "invalid" | "success">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  async function handleConfirm() {
    if (!token) return;
    setSubmitting(true);
    try {
      const res = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) setStatus("success");
      else if (data.reason === "already_unsubscribed") setStatus("already");
      else setStatus("invalid");
    } catch {
      setStatus("invalid");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl glass-strong p-8 text-center">
        {status === "loading" && (
          <>
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">Проверяем ссылку…</p>
          </>
        )}

        {status === "valid" && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-6 w-6" />
            </div>
            <h1 className="mt-4 font-display text-xl font-bold text-foreground">
              Отписаться от рассылки?
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Вы больше не будете получать письма от нас.
            </p>
            <button
              onClick={handleConfirm}
              disabled={submitting}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-destructive px-6 py-2.5 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Подтвердить отписку
            </button>
          </>
        )}

        {status === "already" && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Check className="h-6 w-6" />
            </div>
            <h1 className="mt-4 font-display text-xl font-bold text-foreground">
              Уже отписаны
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Этот адрес ранее был отписан от рассылки.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <Check className="h-6 w-6" />
            </div>
            <h1 className="mt-4 font-display text-xl font-bold text-foreground">
              Готово
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Вы успешно отписались от рассылки.
            </p>
          </>
        )}

        {status === "invalid" && (
          <>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <X className="h-6 w-6" />
            </div>
            <h1 className="mt-4 font-display text-xl font-bold text-foreground">
              Ошибка
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Ссылка недействительна или устарела.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
