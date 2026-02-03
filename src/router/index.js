import { createRouter, createWebHistory } from 'vue-router';

// Import Views (We will create these next)
import HomeView from '../views/Home.vue';
import QuienSoy from '../views/contact/QuienSoy.vue';
import QueQuiero from '../views/contact/QueQuiero.vue';
import ComoEstoy from '../views/contact/ComoEstoy.vue';
import SituacionActual from '../views/contact/SituacionActual.vue';
import Enviado from '../views/contact/Enviado.vue';
import ErrorView from '../views/contact/ErrorView.vue';

// Guard function to check previous route
const requirePreviousStep = (to, from, next) => {
    if (from.path === '/contacto/situacion-actual') {
        next();
    } else {
        // Redirect home if accessing directly or from wrong step
        next('/');
    }
};

const routes = [
    { path: '/', component: HomeView },
    { path: '/contacto/quien-soy', component: QuienSoy },
    { path: '/contacto/que-quiero', component: QueQuiero },
    { path: '/contacto/como-estoy', component: ComoEstoy },
    { path: '/contacto/situacion-actual', component: SituacionActual },
    {
        path: '/contacto/enviado',
        component: Enviado,
        beforeEnter: requirePreviousStep // Apply guard
    },
    {
        path: '/contacto/error',
        component: ErrorView,
        beforeEnter: requirePreviousStep // Apply guard
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
