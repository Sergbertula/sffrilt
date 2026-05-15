import { createFileRoute } from "@tanstack/react-router";
import { LegalShell } from "@/components/layout/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — SFFRILT" },
      { name: "description", content: "Политика обработки персональных данных SFFRILT." },
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
