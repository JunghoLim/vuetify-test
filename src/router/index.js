import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'DashBoard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage
    },
    {
        path: '/break-points',
        name: 'Breakpoints',
        component: Breakpoints
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router