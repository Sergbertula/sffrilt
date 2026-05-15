import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/layout/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Пользовательское соглашение — SFFRILT" },
      { name: "description", content: "Условия использования сайта SFFRILT." },
    ],
  }),
  component: () => (
    <LegalShell title="Пользовательское соглашение">
      <p>
        Используя сайт SFFRILT, вы соглашаетесь с условиями настоящего соглашения. Если вы не
        согласны — пожалуйста, прекратите использование сайта.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Услуги</h2>
      <p>
        Сайт предоставляет информацию об услугах SFFRILT и возможность оставить заявку. Условия
        оказания услуг согласовываются индивидуально.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Интеллектуальная собственность</h2>
      <p>
        Все материалы сайта принадлежат SFFRILT и защищены законодательством об авторском праве.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Контакты</h2>
      <p>По вопросам соглашения: tehprom-tula@mail.ru.</p>
    </LegalShell>
  ),
});
