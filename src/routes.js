import {createWebHistory, createRouter} from 'vue-router'
import bookLib from '@/components/book.vue'
import customerLib from '@/components/customer.vue';
import loginLib from '@/components/login.vue';
import emailVerification from '@/components/emailVerification.vue';
import testAxios from '@/components/testAxios.vue';
import updateBook from '@/components/updateBook.vue';
import updateCustomer from '@/components/updateCustomer.vue';
import addBook from '@/components/addBook.vue';
import addCustomer from '@/components/addCustomer.vue';
import forgotPassword from '@/components/forgotPassword';


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
        name: 'signUp',
        path: '/signup',
        component: emailVerification
    },
    {
        name: 'forgotPassword',
        path: '/forgotpassword',
        component: forgotPassword,
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
    {
        name: 'addBook',
        path: '/book/add',
        component: addBook
    },
    {
        name: 'addCustomer',
        path: '/customer/add',
        component: addCustomer
    }
];

const router= createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;