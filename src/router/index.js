import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import CreateUser from '../components/CreateUser.vue'
import Login from '../views/Login.vue'
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
        path: '/register',
        name: 'Register',
        component: Register

    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    },
    {
        path: '/createuser',
        name: 'CreateUser',
        component: CreateUser

    }
    
   
]

const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router