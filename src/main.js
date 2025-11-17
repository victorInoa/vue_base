import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

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

app.use(createPinia())
app.use(router)

app.mount('#app')
