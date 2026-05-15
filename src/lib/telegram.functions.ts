import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/telegram";

const LeadSchema = z.object({
  name: z.string().min(1).max(200),
  contact: z.string().min(1).max(200),
  task: z.string().max(4000).nullable().optional(),
  source: z.string().max(500).nullable().optional(),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const notifyLead = createServerFn({ method: "POST" })
  .inputValidator((input) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
    if (!TELEGRAM_API_KEY) throw new Error("TELEGRAM_API_KEY is not configured");
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    if (!TELEGRAM_CHAT_ID) throw new Error("TELEGRAM_CHAT_ID is not configured");

    const lines = [
      "🆕 <b>Новая заявка</b>",
      `<b>Имя:</b> ${escapeHtml(data.name)}`,
      `<b>Контакт:</b> ${escapeHtml(data.contact)}`,
    ];
    if (data.task) lines.push(`<b>Задача:</b> ${escapeHtml(data.task)}`);
    if (data.source) lines.push(`<b>Источник:</b> ${escapeHtml(data.source)}`);

    const res = await fetch(`${GATEWAY_URL}/sendMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TELEGRAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("Telegram notify failed", res.status, body);
      return { ok: false as const, status: res.status };
    }
    return { ok: true as const };
  });
