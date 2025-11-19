import { createI18n } from 'vue-i18n'
import en from '../i18n/en.json'
import es from '../i18n/es.json'

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'es',
  fallbackLocale: 'en',
  messages: { en, es },
})
