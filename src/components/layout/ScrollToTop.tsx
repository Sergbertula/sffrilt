import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Resets scroll to top on every route (pathname) change.
 * Skips when the URL has a hash so in-page anchors keep working.
 */
export function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash) return;
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
