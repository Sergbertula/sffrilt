import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'SFFRILT'

interface NewLeadNotificationProps {
  name?: string
  contact?: string
  task?: string | null
  source?: string | null
}

const NewLeadNotificationEmail = ({ name, contact, task, source }: NewLeadNotificationProps) => (
  <Html lang="ru" dir="ltr">
    <Head />
    <Preview>Новая заявка с сайта {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Новая заявка с сайта</Heading>
        <Section style={section}>
          <Text style={label}>Имя / Организация:</Text>
          <Text style={value}>{name || '—'}</Text>

          <Text style={label}>Контакт:</Text>
          <Text style={value}>{contact || '—'}</Text>

          {task && (
            <>
              <Text style={label}>Описание задачи:</Text>
              <Text style={value}>{task}</Text>
            </>
          )}

          {source && (
            <>
              <Text style={label}>Источник:</Text>
              <Text style={value}>{source}</Text>
            </>
          )}
        </Section>
        <Text style={footer}>
          Это автоматическое уведомление с сайта {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewLeadNotificationEmail,
  subject: `Новая заявка с сайта ${SITE_NAME}`,
  displayName: 'Уведомление о новой заявке',
  previewData: {
    name: 'ООО «Пример»',
    contact: '+7 (953) 442-89-98',
    task: 'Нужна автоматизация складского учёта',
    source: '/contacts',
  },
  to: 'tehprom-tula@mail.ru',
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }
const container = { padding: '24px 28px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0f1b3d', margin: '0 0 24px' }
const section = { backgroundColor: '#f5f7fa', borderRadius: '12px', padding: '20px', margin: '0 0 20px' }
const label = { fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '16px 0 4px' }
const value = { fontSize: '15px', color: '#1a202c', margin: '0 0 8px', lineHeight: '1.5' }
const footer = { fontSize: '12px', color: '#a0aec0', margin: '24px 0 0' }
