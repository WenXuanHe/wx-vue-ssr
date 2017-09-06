import Vue from 'vue';
import Router from 'vue-router';
import Select from '../views/Select.vue';

Vue.use(Router);

export function createRouter() {

    return new Router({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/index', component: Select },
            { path: '/test', component: () => import('../components/Test.vue') },
        ]
    })
}