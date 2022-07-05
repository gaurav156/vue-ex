import {createWebHistory, createRouter} from 'vue-router'
import bookLib from '@/components/book.vue'
import customerLib from '@/components/customer.vue';
import loginLib from '@/components/login.vue';
import testAxios from '@/components/testAxios.vue';
import updateBook from '@/components/updateBook.vue';
import updateCustomer from '@/components/updateCustomer.vue';

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
    {
        name: 'testAxios',
        path: '/testAxios',
        component: testAxios
    },
    {
        name: 'updateBook',
        path: '/book/update/:bookID',
        component: updateBook
    },
    {
        name: 'updateCustomer',
        path: '/customer/update/:customerID',
        component: updateCustomer
    },
];

const router= createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;