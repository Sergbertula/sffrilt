import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Send } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--gradient-glow)] blur-3xl" />
      <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contacts"
            className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_oklch(0.7_0.2_245/0.6)] hover:scale-105 transition-transform"
          >
            Обсудить проект
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://t.me/tehprom1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
          >
            <Send className="h-4 w-4 text-primary" />
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
