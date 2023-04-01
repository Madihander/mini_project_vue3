import { createApp } from 'vue'
import App from './App.vue'

import dirictives from '@/dirictives'
import router from '@/router/router'
import store from '@/store/'



const app = createApp(App)

dirictives.forEach(dirictive => {
    app.directive(dirictive.name,dirictive )
})


app
    .use(router)
    .use(store)
    .mount('#app');