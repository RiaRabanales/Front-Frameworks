import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',  //así trabajo rutas con parámetros
    name: 'JobDetails',
    component: JobDetails,
    props: true //indica que puedo aceptar cualquier componente de ruta como prop
  },
  {
    //así redirecciono:
    path: '/all-jobs', //esta es la ruta origen
    redirect: '/jobs' //aquí es donde le llevo
  },
  {
    //página catchAll = cajón de sastre: 404
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
