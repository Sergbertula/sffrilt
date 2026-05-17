import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/layout/PageHero";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Использование cookies — SFFRILT" },
      { name: "description", content: "Как сайт SFFRILT использует cookies: типы файлов, цели обработки, аналитика и управление настройками в браузере пользователя." },
      { property: "og:title", content: "Использование cookies — SFFRILT" },
      { property: "og:description", content: "Как сайт SFFRILT использует cookies: типы файлов, цели обработки и управление настройками в браузере." },
      { property: "og:url", content: "https://sunny-start-forge.lovable.app/cookies" },
    ],
    links: [
      { rel: "canonical", href: "https://sunny-start-forge.lovable.app/cookies" },
    ],
  }),
  component: () => (
    <LegalShell title="Использование cookies">
      <p>
        Сайт SFFRILT использует cookies для улучшения работы сайта, анализа посещаемости и
        персонализации интерфейса.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Типы cookies</h2>
      <p>
        Технические (необходимы для работы сайта), аналитические (помогают понять поведение
        посетителей), функциональные (запоминают настройки).
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Управление</h2>
      <p>
        Вы можете отключить cookies в настройках браузера. Часть функциональности сайта при этом
        может стать недоступной.
      </p>
    </LegalShell>
  ),
});
