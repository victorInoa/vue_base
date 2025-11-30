import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from './i18n'

import axios from 'axios'

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

axios.defaults.baseURL = import.meta.env.VITE_SERVER_ROOT_URL
//ready for use tokens
//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

//uses here
app.use(createPinia())
app.use(router)
app.use(i18n)
import 'sweetalert2/dist/sweetalert2.min.css'
app.mount('#app')
