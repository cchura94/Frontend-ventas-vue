import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BasePagina',
    component: () => import(/* webpackChunkName: "basepagina" */ '../views/templates/BasePagina.vue'),
    children: [
      {
        path: '/',
        name: 'Inicio',
        component: () => import(/* webpackChunkName: "inicio" */ '../views/pagina/Inicio.vue'),
      },
      {
        path: 'productos',
        name: 'Productos',
        component: () => import(/* webpackChunkName: "productos" */ '../views/pagina/Productos.vue'),
      },
      {
        path: 'contactos',
        name: 'Contactos',
        component: () => import(/* webpackChunkName: "contacto" */ '../views/pagina/Contacto.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/pagina/Login.vue'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'BaseAdmin',
    component: () => import(/* webpackChunkName: "baseadmin" */ '../views/templates/BaseAdmin.vue'),
    children: [
      {
        path: '/',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
