import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   //importa directamente index dentro de la carpeta router

createApp(App).use(router).mount('#app')
