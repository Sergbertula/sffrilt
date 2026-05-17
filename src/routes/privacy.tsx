import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/layout/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — SFFRILT" },
      { name: "description", content: "Политика конфиденциальности SFFRILT: какие персональные данные мы собираем, цели обработки, сроки хранения и права пользователей." },
      { property: "og:title", content: "Политика конфиденциальности — SFFRILT" },
      { property: "og:description", content: "Какие персональные данные мы собираем, цели и сроки обработки, как защищаем и какие у вас права." },
      { property: "og:url", content: "https://sunny-start-forge.lovable.app/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://sunny-start-forge.lovable.app/privacy" },
    ],
  }),
  component: () => (
    <LegalShell title="Политика конфиденциальности">
      <p>
        Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей
        сайта SFFRILT.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Какие данные мы собираем</h2>
      <p>
        Имя, контактные данные (телефон, e-mail), сообщение пользователя, технические данные
        (cookies, IP-адрес, тип устройства).
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Цели обработки</h2>
      <p>Связь с пользователем, обработка заявки, улучшение работы сайта.</p>
      <h2 className="font-display text-xl font-semibold text-foreground">Хранение и защита</h2>
      <p>
        Данные хранятся на защищённых серверах и не передаются третьим лицам, кроме случаев,
        предусмотренных законом.
      </p>
      <h2 className="font-display text-xl font-semibold text-foreground">Контакт</h2>
      <p>По вопросам обработки данных: tehprom-tula@mail.ru.</p>
    </LegalShell>
  ),
});
