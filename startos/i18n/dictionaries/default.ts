export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Snowflake!': 0,
  'Snowflake Proxy': 1,
  'The proxy is running': 2,
  'The proxy is not running': 3,
  Dashboard: 4,
  'The dashboard is ready': 5,
  'The dashboard is not ready': 6,

  // interfaces.ts
  'NAT type, bandwidth and connections relayed by this proxy': 7,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
