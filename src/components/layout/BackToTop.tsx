import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Наверх"
      className={`fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.7_0.2_245/0.7)] ring-1 ring-primary-foreground/20 transition-all duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
