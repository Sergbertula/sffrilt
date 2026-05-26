import { createFileRoute } from '@tanstack/react-router'
import { createClient } from '@supabase/supabase-js'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/telegram'

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderEmailHtml(name: string, contact: string, task: string | null, source: string | null): string {
  const taskBlock = task
    ? `<tr><td style="padding:12px 0;border-bottom:1px solid #eef1f5;"><p style="margin:0 0 4px;font-size:12px;color:#718096;text-transform:uppercase;letter-spacing:0.5px;">Описание задачи</p><p style="margin:0;font-size:15px;color:#1a202c;line-height:1.5;">${escapeHtml(task).replace(/\n/g, '<br>')}</p></td></tr>`
    : ''
  const sourceBlock = source
    ? `<tr><td style="padding:12px 0;border-bottom:1px solid #eef1f5;"><p style="margin:0 0 4px;font-size:12px;color:#718096;text-transform:uppercase;letter-spacing:0.5px;">Источник</p><p style="margin:0;font-size:15px;color:#1a202c;line-height:1.5;">${escapeHtml(source)}</p></td></tr>`
    : ''

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Новая заявка</title>
</head>
<body style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f7fa;padding:24px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
          <tr>
            <td style="padding:28px 28px 20px;background:linear-gradient(135deg,#0f1b3d 0%,#1e3a5f 100%);color:#ffffff;">
              <h1 style="margin:0;font-size:20px;font-weight:700;letter-spacing:-0.2px;">Новая заявка с сайта</h1>
              <p style="margin:6px 0 0;font-size:13px;opacity:0.85;">SFFRILT</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eef1f5;">
                    <p style="margin:0 0 4px;font-size:12px;color:#718096;text-transform:uppercase;letter-spacing:0.5px;">Имя / Организация</p>
                    <p style="margin:0;font-size:15px;color:#1a202c;line-height:1.5;">${escapeHtml(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eef1f5;">
                    <p style="margin:0 0 4px;font-size:12px;color:#718096;text-transform:uppercase;letter-spacing:0.5px;">Контакт</p>
                    <p style="margin:0;font-size:15px;color:#1a202c;line-height:1.5;">${escapeHtml(contact)}</p>
                  </td>
                </tr>
                ${taskBlock}
                ${sourceBlock}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px;background:#fafbfc;border-top:1px solid #eef1f5;">
              <p style="margin:0;font-size:12px;color:#a0aec0;">Это автоматическое уведомление с сайта SFFRILT. Вы можете <a href="https://sffrilt.ru/unsubscribe" style="color:#3b6fa0;text-decoration:underline;">отписаться от уведомлений</a>.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        const apiKey = process.env.LOVABLE_API_KEY
        const telegramApiKey = process.env.TELEGRAM_API_KEY
        const telegramChatId = process.env.TELEGRAM_CHAT_ID

        if (!supabaseUrl || !supabaseServiceKey || !apiKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let body: any
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const name = String(body.name || '').trim().slice(0, 200)
        const contact = String(body.contact || '').trim().slice(0, 200)
        const task = body.task ? String(body.task).trim().slice(0, 4000) : null
        const source = body.source ? String(body.source).slice(0, 200) : null

        if (!name || !contact) {
          return Response.json({ error: 'Name and contact are required' }, { status: 400 })
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        // 1. Save lead
        const { error: insertError } = await supabase.from('leads').insert({
          name,
          contact,
          task,
          source,
        })

        if (insertError) {
          console.error('[Contact API] insert error', insertError)
          return Response.json({ error: 'Failed to save lead' }, { status: 500 })
        }

        // 2. Send Telegram notification
        if (telegramApiKey && telegramChatId) {
          const lines = [
            '🆕 <b>Новая заявка</b>',
            `<b>Имя:</b> ${escapeHtml(name)}`,
            `<b>Контакт:</b> ${escapeHtml(contact)}`,
          ]
          if (task) lines.push(`<b>Задача:</b> ${escapeHtml(task)}`)
          if (source) lines.push(`<b>Источник:</b> ${escapeHtml(source)}`)

          fetch(`${GATEWAY_URL}/sendMessage`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'X-Connection-Api-Key': telegramApiKey,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: lines.join('\n'),
              parse_mode: 'HTML',
              disable_web_page_preview: true,
            }),
          }).catch((err) => {
            console.error('[Contact API] Telegram notify failed', err)
          })
        }

        // 3. Enqueue email notification with rendered HTML
        const messageId = crypto.randomUUID()
        const html = renderEmailHtml(name, contact, task, source)
        const text = `Имя: ${name}\nКонтакт: ${contact}\nЗадача: ${task || '—'}\nИсточник: ${source || '—'}`

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: 'tehprom-tula@mail.ru',
            from: 'SFFRILT <notify@sffrilt.ru>',
            sender_domain: 'notify.sffrilt.ru',
            subject: 'Новая заявка с сайта SFFRILT',
            html,
            text,
            purpose: 'transactional',
            label: 'new-lead-notification',
            idempotency_key: `lead-${messageId}`,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('[Contact API] enqueue error', enqueueError)
        }

        return Response.json({ success: true })
      },
    },
  },
})
