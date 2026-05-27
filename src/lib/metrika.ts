// Placeholder — замените 0 на реальный ID счётчика Яндекс.Метрики
const COUNTER_ID = 0;

export function ymReachGoal(goal: string) {
  if (typeof window !== "undefined" && "ym" in window) {
    // @ts-ignore
    window.ym(COUNTER_ID, "reachGoal", goal);
  }
}

export function handleYMClick(goal: string, href?: string, target?: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    ymReachGoal(goal);
    if (href) {
      if (target === "_blank" || (!target && e.currentTarget.target === "_blank")) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = href;
      }
    }
  };
}
