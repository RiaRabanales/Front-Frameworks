import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth }from './firebase/config'

// Estilos css globales:
import './assets/main.css'

//Monto de nuevo la app la primera vez que firebase detecta un cambio en la autenticación
let app;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    } 
});
