import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}

const lang = localStorage.getItem('lang') || 'zh-CN'

const i18n = createI18n({
  locale: lang,
  messages
})

export default i18n
