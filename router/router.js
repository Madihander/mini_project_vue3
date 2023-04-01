import { createRouter, createWebHistory} from "vue-router"
import Main from '@/pages/Main'
import CardPage from '@/pages/CardPage'
import CardIdPage from '@/pages/CardIdPage'
import CardPageWithStore from '@/pages/CardPageWithStore'
import Contacts from '@/pages/Contacts'
const routes = [
    {
        path: '/',
        component: Main
    },
    
    {
        path: '/cards', 
        component: CardPage
    },
    {
        path: '/cardsStore', 
        component: CardPageWithStore
    },
    {
        path: '/contacts',
        component: Contacts,
    },
    {
        path: '/cards/:id',
        component: CardIdPage
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router   