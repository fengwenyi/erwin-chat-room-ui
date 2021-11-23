import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(ElementPlus)
  .mount('#app')
