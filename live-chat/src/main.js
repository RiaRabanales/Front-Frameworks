import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

import { projectAuth } from './firebase/config';

//Aquí creo la aplicación y la monto en el DOM cuando ya tengo conexión a firebase
let app;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        //esto la primera vez; lo genero para evitarme que al hacer reload me salga pantalla de login
        app = createApp(App).use(router).mount('#app');
    } 
});