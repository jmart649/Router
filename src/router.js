import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Content from './views/Content.vue'
import NotFound from './views/404.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/content', component: Content },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]

export const router = createRouter({
    history:createWebHistory(),
    routes,
})