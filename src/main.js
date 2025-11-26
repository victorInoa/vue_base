import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from './i18n'

//*************************************/
//*Fonts from https://fontsource.org***/
//*************************************/
// Supports weights 400-700
import '@fontsource-variable/caveat'
// Supports weights 200-700
import '@fontsource-variable/oswald'
/*End fonts****************************/
import App from './App.vue'
import router from './router'

const app = createApp(App)

//uses here
app.use(createPinia())
app.use(router)
app.use(i18n)
import 'sweetalert2/dist/sweetalert2.min.css'
app.mount('#app')
