// import Vue from 'vue'
import {createWebHistory, createRouter} from 'vue-router'
//import homeLib from '@/components/home.vue'
import bookLib from '@/components/book.vue'
import customerLib from '@/components/customer.vue';
import loginLib from '@/components/login.vue';

const routes=[
    {
        name: 'book',
        path: '/',
        component: bookLib
    },
    {
        name: 'customer',
        path: '/customer',
        component: customerLib
    },
    {
        name: 'login',
        path: '/login',
        component: loginLib
    },
];

const router= createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

// Vue.use(Router)

export default router;

// ({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: home
//     },
//     {
//         path: '/book',
//         name: 'book',
//         component: book
//     },
//     {
//         path: '/customer',
//         name: 'customer',
//         component: customer
//     }
//   ]
// })