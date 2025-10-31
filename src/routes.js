import { createWebHistory , createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Proficies from "./components/Proficies.vue";

const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'proficies',
        path:'/prophecies',
        component:Proficies
    },
    {
        name:'about',
        path:'/about',
        component:()=>import('./components/About.vue')
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})