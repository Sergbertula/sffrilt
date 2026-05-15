import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Trash2, LogOut, RefreshCw, Mail, MessageSquare, User } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  contact: string;
  task: string | null;
  source: string | null;
  created_at: string;
};

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Админка — Заявки" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);

  const loadLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
    } else {
      setLeads((data ?? []) as Lead[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;
      if (!session) {
        navigate({ to: "/login" });
        return;
      }
      setEmail(session.user.email ?? null);

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      const admin = !!roleData;
      setIsAdmin(admin);
      setAuthChecked(true);

      if (admin) await loadLeads();
    };
    init();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить заявку?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Заявка удалена");
      setLeads((prev) => prev.filter((l) => l.id !== id));
    }
  };

  if (!authChecked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Нет доступа</h1>
        <p className="mt-3 text-muted-foreground">
          Аккаунт <span className="text-foreground">{email}</span> не имеет роли администратора.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Чтобы получить доступ, попросите владельца проекта добавить вашу запись в таблицу <code className="rounded bg-secondary px-1.5 py-0.5">user_roles</code> с ролью <code className="rounded bg-secondary px-1.5 py-0.5">admin</code>.
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-secondary"
        >
          <LogOut className="h-4 w-4" /> Выйти
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Заявки</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Всего: {leads.length} · {email}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={loadLeads}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-secondary disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Обновить
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" /> Выйти
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {leads.length === 0 && !loading && (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-muted-foreground">
            Заявок пока нет.
          </div>
        )}

        {leads.map((lead) => (
          <article
            key={lead.id}
            className="rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-foreground">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{lead.name}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="break-all text-foreground">{lead.contact}</span>
                </div>
                {lead.task && (
                  <div className="mt-3 flex gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0" />
                    <p className="whitespace-pre-wrap">{lead.task}</p>
                  </div>
                )}
                {lead.source && (
                  <p className="mt-3 text-xs text-muted-foreground">Источник: {lead.source}</p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                <time className="text-xs text-muted-foreground">
                  {new Date(lead.created_at).toLocaleString("ru-RU")}
                </time>
                <button
                  onClick={() => handleDelete(lead.id)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Удалить
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
