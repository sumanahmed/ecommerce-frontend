import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const otherRoutes = () => [
    {
        path:'/',
        name:'product',
        component:() => import('./components/Product.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:() => import('./components/Cart.vue')
    }    
]

const routes = [  
    {
        path: '/',
        name: 'main',
        component: () => import('@/components/layouts/MainLayout.vue'),
        meta: { auth: false },
        children: otherRoutes()
    },    
    {
        path: '*',
        component: () => import('@/components/NotFoundPage.vue'),
        meta: { hideNavigation: true }
    }
];

export const router = new VueRouter({
    mode: "history",
    hash: false,
    base: process.env.BASE_URL,
    hashbang: false,
    routes
})
  

export default router
