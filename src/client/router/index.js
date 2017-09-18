import Vue from 'vue';
import Router from 'vue-router';
import Select from '../views/Select.vue';
import SelectStaff from '../views/SelectStaff.vue';

Vue.use(Router);

export function createRouter() {

    return new Router({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/index/:p_id', component: Select },
            { path: '/index', component: Select },
            { path: '/selectStaff/:p_id', component: SelectStaff }
        ]
    })
}