import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'
import action from './action'
import getter from './getter'

Vue.use(Vuex)

export function createStore () {
    
    return new Vuex.Store({
        state,
        mutation,
        action,
        getter
    })
}