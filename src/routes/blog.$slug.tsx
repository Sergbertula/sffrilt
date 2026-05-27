import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft, ArrowRight, MessageCircle, Send } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactForm } from "@/components/sections/ContactForm";
import { articles, type Article } from "@/data/articles";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Статья не найдена — SFFRILT" }] };
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description: a.excerpt,
      datePublished: a.date,
      dateModified: a.date,
      author: { "@type": "Organization", name: a.author },
      publisher: {
        "@type": "Organization",
        name: "SFFRILT",
      },
      articleSection: a.category,
    };
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "/" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "/blog" },
        { "@type": "ListItem", position: 3, name: a.title, item: `/blog/${a.slug}` },
      ],
    };
    return {
      meta: [
        { title: `${a.title} — Блог SFFRILT` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: a.date },
        { property: "article:section", content: a.category },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleJsonLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Статья не найдена</h1>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 rounded-lg gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Назад в блог
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-2xl font-bold text-foreground">Ошибка загрузки</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: Page,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Парсит inline-ссылки в формате [текст](url). Внутренние пути (/...) рендерим как <Link>, внешние — как <a>.
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const [, label, url] = match;
    if (url.startsWith("/")) {
      parts.push(
        <Link
          key={`l${key++}`}
          to={url}
          className="text-primary underline-offset-4 hover:underline font-medium"
        >
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a
          key={`a${key++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline-offset-4 hover:underline font-medium"
        >
          {label}
        </a>,
      );
    }
    lastIndex = re.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function Page() {
  const { article } = Route.useLoaderData();
  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <>
      <article className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Все статьи
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
              {article.category}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(article.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime} мин чтения
            </span>
            <span>{article.author}</span>
          </div>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
            {article.content.map((block: Article["content"][number], i: number) => {
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="mt-12 font-display text-2xl font-bold text-foreground sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3
                    key={i}
                    className="mt-8 font-display text-xl font-semibold text-foreground"
                  >
                    {block.text}
                  </h3>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.items?.map((it: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{renderInline(it)}</span>
                      </li>
                    ))}
                  </ul>
                );
              if (block.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-primary pl-5 italic text-foreground"
                  >
                    {renderInline(block.text ?? "")}
                  </blockquote>
                );
              return (
                <p key={i} className="text-foreground/90">
                  {renderInline(block.text ?? "")}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Похожие материалы
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group">
                  <GlassCard className="flex h-full flex-col">
                    <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                      {a.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Читать
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
    </>
  );
}
