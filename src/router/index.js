import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Tables from '@/views/Tables'
import Forms from '@/views/Forms'
import Buttons from '@/views/Buttons'
import Icons from '@/views/Icons'

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
    },
    {
        path: '/tables',
        name: 'Tables',
        component: Tables
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
    },
    {
        path: '/forms',
        name: 'Forms',
        component: Forms
    },
    {
        path: '/icons',
        name: 'Icons',
        component: Icons
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router