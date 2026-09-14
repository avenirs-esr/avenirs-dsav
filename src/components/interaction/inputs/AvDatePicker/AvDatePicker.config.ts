import type { Locale } from 'date-fns'
import { enGB } from 'date-fns/locale/en-GB'
import { enUS } from 'date-fns/locale/en-US'
import { fr } from 'date-fns/locale/fr'

export const DATE_FNS_LOCALE_MAP: Record<string, Locale> = {
  'en': enUS,
  'en-GB': enGB,
  'en-US': enUS,
  'fr': fr,
  'fr-FR': fr,
}

export const DEFAULT_DATE_FNS_LOCALE = fr
