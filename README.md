# Vue Base

_**Este es una base para arrancar cualquier tipo de proyecto, contiene explicaciones extendidas, configuraciones reales y ejemplos funcionales para cada dependencia de un proyecto Vue 3 + Vite moderno al 2025.**_

## 📦 Viene preinstalado

**_En composer.Json_**

- [vlucas/phpdotenv](https://github.com/vlucas/phpdotenv)
- [pestphp/pest](https://pestphp.com/)
- [phpstan/phpstan](https://github.com/phpstan/phpstan)

**_En Package.Json_**

- [Axios](https://axios-http.com/)
- [Iconify](https://iconify.design/docs/icon-components/vue/)
- [Chart.js](https://www.chartjs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [ESLint + Prettier + eslint-plugin-vue](https://eslint.org/docs/latest/use/getting-started)
- [Vite Plugin Vue Devtools](https://devtools.vuejs.org/guide/vite-plugin)

## Explicación completa de todas las dependencias y devDependencies

A continuación encontrarás **una explicación extensa**, con **configuración real** y **ejemplos prácticos de uso**, para cada dependencia instalada en tu proyecto.

### Composer.json

**1. vlucas/phpdotenv**

¿Para qué sirve?
Es una biblioteca de PHP que carga automáticamente las variables de entorno desde un archivo
.env
al entorno de PHP ($_ENV), permitiendo una gestión segura y organizada de configuraciones sensibles (como credenciales de base de datos, claves de API, etc.) sin exponerlas en el código fuente. Es especialmente útil en
entornos de desarrollo y pruebas._

root del proyecto/

**├── .env -----------------------# Variables de entorno (NO subir a Git)**

**├── .env.example-----------# Plantilla con valores de ejemplo (SÍ subir a Git)**

├── composer.json--------# Asegúrate de tener la dependencia

└── index.php--------------# Archivo de ejemplo

**Como usarlo**

Debes hacer una copia del archivo `/.env.example` y renombrarlo `/.env`, y colocas todas las variables que necesites de configuración, como en el ejemplo más abajo.

```markdown
# Base de datos

DB_HOST=localhost
DB_NAME=mi_base_de_datos
DB_USER=usuario
DB_PASS=contraseña_segura

# API Keys

GOOGLE_MAPS_API=tu_clave_aquí
DEBUG_MODE=true
```

Si tienes un `init.php` en la raíz del proyecto, puedes cargar las variables de entorno con el siguiente código:

En `/server/index.php` o si generas un archivo de configuración o iniciación (ini.php), coloca este siguiente código, para configurar y poder usarlas.

```php
<?php
require 'vendor/autoload.php';

// Cargar el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ .'/../');
$dotenv->load();

// Acceder a las variables que necesites
$dbHost = $_ENV['DB_HOST'];
$dbName = $_ENV('DB_NAME');
$apiKey = $_ENV['GOOGLE_MAPS_API'] ?? ''; 

// Ejemplo de uso en una conexión PDO
try {
    $pdo = new PDO(
        "mysql:host={$_ENV['DB_HOST']};dbname={$_ENV['DB_NAME']}",
        $_ENV['DB_USER'],
        $_ENV['DB_PASS']
    );
    echo "¡Conexión exitosa a la base de datos!";
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Ejemplo condicional con DEBUG_MODE
if ($_ENV['DEBUG_MODE'] === 'true') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
```

Dentro de vue puede acceder a las

```js
<scrip setup>
    const apiUrl = import.meta.env.VITE_SERVER_ROOT_URL
</scrip>
<template>
    <p>{{apiUrl}}</p>
</template>
```

---

### Package.json

### DEPENDENCIAS (Se usan en producción)

---

**1. Axios**

Axios es un cliente HTTP muy popular para realizar solicitudes a APIs desde el navegador. Es más amigable y potente que `fetch`, permitiendo crear instancias configuradas, interceptores, manejo centralizado de errores y envío automático de
cookies o headers. Es ideal para proyectos con backend propio (PHP, Laravel, Symfony, Node, etc.), porque permite tener control total sobre solicitudes y respuestas.

**Cómo configurarlo**

Puedes crear un archivo global en `src/services/api.js`:

```js
import axios from 'axios'

const api = axios.create({
                             baseURL:'https://mi-backend.com/api',
                             timeout:8000,
                             headers:{
                                 'Content-Type':'application/json'
                             }
                         })

// Interceptor opcional
api.interceptors.response.use(
    response => response,
    error => {
        console.error('Error de API:', error.response?.data)
        return Promise.reject(error)
    }
)

export default api;
```

**Ejemplo de uso**

```js
import api from '@/services/api'

const loadUser = async() => {
    const res = await api.get('/user/profile')
    console.log(res.data)
}
```

---

**Iconify**

Biblioteca de iconos con una gran cantidad y variedad de estilos, muy fácil de implementar...

**Cómo configurarlo**

No tiene configuracion adicional

**Ejemplo de uso**

Solo se debe importar en el componente o la vista que se usará

```js
import {Icon} from "@iconify/vue";
```

Dentro de las etiquetas `<theme></theme>` usarlo

```html

<theme>
  <Icon icon="mdi:home" style="color: red"/>
</theme>
```

---

**2. Chart.js**

Chart.js es una librería poderosa para generar gráficas interactivas en HTML5. Permite crear gráficos de barras, líneas, pastel, radar, burbujas y más. Es ideal para paneles administrativos, dashboards o visualización de datos. Funciona
directamente con `<canvas>` y es completamente personalizable.

**Cómo configurarlo**

No requiere configuración global, pero puedes crear un helper en `src/utils/chart.js`:

```js
import {Chart} from 'chart.js/auto'

export function renderChart(canvas, type, data, options = {}){
    return new Chart(canvas, {
        type,
        data,
        options
    })
}
```

**Ejemplo de uso**

```vue

<script setup>
  import {ref, onMounted} from 'vue'
  import {renderChart} from '@/utils/chart'

  const chart = ref(null)

  onMounted(() => {
    renderChart(chart.value, 'bar', {
      labels:['Ene', 'Feb', 'Mar'],
      datasets:[{label:'Ventas', data:[12, 19, 3]}]
    })
  })
</script>
<template>
  <canvas ref="chart"></canvas>
</template>

```

---

**3. Pinia**

Pinia es el store oficial de Vue 3, reemplazo moderno de Vuex. Tiene una API más simple, soporte para TypeScript, reactividad nativa y excelente rendimiento. Permite compartir estado global entre todos los componentes como usuario logueado,
settings, tokens, etc.

**Cómo configurarlo**

En `main.js`:

```js
import {createPinia} from 'pinia'

app.use(createPinia())
```

Crear un store en `src/stores/user.js`:

```js
import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state:() => ({
        name:null,
        logged:false
    }),
    actions:{
        setUser(name){
            this.name   = name
            this.logged = true
        }
    }
})
```

**Ejemplo de uso**

```js
import {useUserStore} from '@/stores/user'

const user = useUserStore()
user.setUser('Victor')
console.log(user.name)
```

---

**4. Vue**

Vue es el framework principal de tu aplicación. Proporciona el sistema reactivo, componentes, el virtual DOM y las características modernas con Composition API. Es la base de toda la aplicación, y todos los componentes dependen de él.

**Configuración

`main.js` es el punto de entrada:

```js
import {createApp} from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

**Ejemplo de uso**

```vue

<template>
  <button @click="count++">{{ count }}</button>
</template>
<script setup>
  import {ref} from 'vue'

  const count = ref(0)
</script>
```

---

**5. Vue Router**

Vue Router maneja el sistema de navegación de tu aplicación, permitiendo crear rutas amigables y componentes por página. Soporta rutas anidadas, parámetros dinámicos, guards de navegación y lazy-loading.

**Cómo configurarlo

Crea `src/router/index.js`:

```js
import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
    {path:'/', component:Home},
    {path:'/about', component:() => import('@/pages/About.vue')}
]

const router = createRouter({
                                history:createWebHistory(),
                                routes
                            })

export default router
```

En `main.js`:

```js
import router from './router'

app.use(router)
```

**Ejemplo de uso**

```vue

<template>
  <router-link to="/about">Ir a About</router-link>
  <router-view/>
</template>
```

---

### 🛠️ DEV DEPENDENCIES (solo en desarrollo)

---

**6. TailwindCSS + @tailwindcss/vite**

TailwindCSS es un framework CSS de utilidades que permite diseñar interfaces rápidamente usando clases como `p-4`, `bg-blue-500`, `flex`, etc. El plugin `@tailwindcss/vite` integra Tailwind directamente con Vite, eliminando pasos manuales y
activando el purge automático.

**Cómo configurarlo

`src/assets/main.css`:

```css
@import "tailwindcss";
```

`vite.config.js`:

```js
import tailwind from '@tailwindcss/vite'

export default {plugins:[tailwind()]}
```

**Ejemplo de uso**

```vue

<template>
  <button class="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
</template>
```

---

**7. Vite**

Vite es el motor de desarrollo y build. Compila Vue, CSS, imágenes, ejecuta el servidor local y optimiza el build para producción. Está diseñado para ser extremadamente rápido aprovechando ES Modules.

**Configuración básica (`vite.config.js`)

```js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
                                plugins:[vue()],
                                server:{port:5173}
                            })
```

**Ejemplo de uso**

```bash
npm run dev
```

---

**8. ESLint + Prettier + eslint-plugin-vue**

Estas herramientas permiten mantener tu código limpio, ordenado y con estilo consistente. ESLint analiza errores de JavaScript y Vue, mientras que Prettier formatea automáticamente el código.

**Configuración típica `.eslintrc.cjs`

```js
module.exports = {
    extends:[
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-prettier'
    ]
}
```

**Ejemplo de uso**

```bash
npm run lint
npm run format
```

---

**9. Vite Plugin Vue Devtools**

Agrega una versión avanzada de Vue Devtools dentro del navegador, incluyendo inspección de stores, componentes, rutas y estado reactivo.

**Configuración**

```js
import VueDevTools from 'vite-plugin-vue-devtools'

export default {plugins:[VueDevTools()]}
```

**Ejemplo de uso**

Al ejecutar `npm run dev`, abre el panel lateral con:

```
Ctrl + Shift + D
```

---

**Comenzar el proyecto**

```sh
npm install
```

**Compile and Hot-Reload for Development**

```sh
npm run dev
```

**Compile and Minify for Production**

```sh
npm run build
```

**Lint with [ESLint](https://eslint.org/)**

```sh
npm run lint
```