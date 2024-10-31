import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import SumaCheckbox from "./components/SumaCheckbox.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    {
        path: '/checkbox', component: SumaCheckbox
    },
    {
        path: '/doble/:numero?', component: NumeroDoble
    },
    {
        path: '/multiplicar/:numero', component: TablaMultiplicar
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router