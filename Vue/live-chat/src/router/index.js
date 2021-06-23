import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

//Esto se llama routeguard: evita que usuarios no logeados accedan a urls
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'Welcome'}); //si el usuario es nulo voy a la ruta del login
  } else {
    next(); //aquí sigue a su ruta
  }
}

//Para evitar que usuarios ya logeados puedan ver el welcome:
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: 'Chatroom'});
  } else {
    next();
  }
}

//Aquí las rutas habituales:
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
