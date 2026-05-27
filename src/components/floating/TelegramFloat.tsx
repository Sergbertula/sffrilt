import { Send } from "lucide-react";
import { handleYMClick } from "@/lib/metrika";

export function TelegramFloat() {
  return (
    <a
      href="https://t.me/tehprom1"
      target="_blank"
      rel="noreferrer"
      aria-label="Написать в Telegram"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full gradient-primary glow-blue transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-glow-pulse" />
      <Send className="relative h-6 w-6 text-primary-foreground" />
    </a>
  );
}
