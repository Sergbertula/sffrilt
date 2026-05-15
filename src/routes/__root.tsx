import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { TelegramFloat } from "@/components/floating/TelegramFloat";
import { JuliaAssistant } from "@/components/floating/JuliaAssistant";
import { CookieBanner } from "@/components/floating/CookieBanner";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Страница не найдена</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Возможно, она была перемещена или удалена.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Что-то пошло не так
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Попробуйте обновить страницу или вернуться на главную.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Повторить
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SFFRILT — AI-решения, Telegram-боты и сайты для бизнеса" },
      {
        name: "description",
        content:
          "SFFRILT — разработка AI-систем, Telegram-ботов и сайтов. Автоматизируем бизнес-процессы и увеличиваем поток клиентов.",
      },
      { name: "author", content: "SFFRILT" },
      { property: "og:title", content: "SFFRILT — AI-автоматизация бизнеса" },
      {
        property: "og:description",
        content: "AI-агенты, Telegram-боты, сайты и SEO для роста бизнеса.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SFFRILT",
          url: "/",
          description:
            "Разработка AI-систем, Telegram-ботов и сайтов для автоматизации бизнеса.",
          sameAs: ["https://t.me/tehprom1"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            availableLanguage: ["ru"],
            url: "https://t.me/tehprom1",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <TelegramFloat />
        <JuliaAssistant />
        <CookieBanner />
        <Toaster position="top-center" theme="dark" richColors />
      </div>
    </QueryClientProvider>
  );
}
