import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../guards/authGuard'

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
    beforeEnter: authGuard,
    children: [
      {
        path: '/',
        name: 'Admin',
        //meta: {requiresAuth:true},
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
      },
      {
        path: 'categoria',
        name: 'Categoria',
        component: () => import(/* webpackChunkName: "categoria" */ '../views/admin/categoria/ListaCategoria.vue'),
      },
      {
        path: 'cliente',
        name: 'Cliente',
        component: () => import(/* webpackChunkName: "cliente" */ '../views/admin/cliente/Cliente.vue'),
        children: [
          {
            path: '/',
            name: 'ListaCliente',
            component: () => import(/* webpackChunkName: "lista-cliente" */ '../views/admin/cliente/ListaCliente.vue'),
          },
          {
            path: 'nuevo',
            name: 'NuevoCliente',
            component: () => import(/* webpackChunkName: "nuevo-cliente" */ '../views/admin/cliente/NuevoCliente.vue'),
          },
        ]
      },
      {
        path: 'producto',
        name: 'Producto',
        component: () => import(/* webpackChunkName: "producto" */ '../views/admin/producto/Producto.vue'),
        children: [
          {
            path: '/',
            name: 'ListaProducto',
            component: () => import(/* webpackChunkName: "lista-producto" */ '../views/admin/producto/ListaProducto.vue'),
          },
          {
            path: 'nuevo',
            name: 'NuevoProducto',
            component: () => import(/* webpackChunkName: "nuevo-producto" */ '../views/admin/producto/NuevoProducto.vue'),
          },
        ]
      },
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
