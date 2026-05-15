const clients = [
  "Тех­пром Тула",
  "Стом­Класс",
  "EduFlow",
  "RealEstate Pro",
  "MedHelp",
  "FoodLine",
  "LogiTrack",
  "B2B Sales",
  "Юрист.Онлайн",
  "TravelMate",
  "ShopBoost",
  "AutoService 24",
];

export function Clients() {
  return (
    <section className="relative border-y border-border/40 bg-card/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Нам доверяют 50+ компаний из России и СНГ
        </p>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="flex h-10 items-center gap-2 whitespace-nowrap font-display text-base font-semibold text-muted-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
