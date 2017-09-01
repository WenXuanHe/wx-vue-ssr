import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Test from './components/Test'

Vue.use(Router)

export function createRouter() {

    return new Router({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/index', component: Home },
            { path: '/test', component: Test },
        ]
    })
}