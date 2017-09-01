import axios from 'axios'
import { makeBy } from '../utils/getCharacter'

/**
 * string轉換大寫
 * @param {*string} str  
 */
export const toUpperCase = (str) => { String.prototype.toUpperCase.call(str)}

export default {

    getPersons({ commit }){
        axios.get('').then((data) => {
            data.forEach(function(elem) {
                elem.character = toUpperCase(makeBy(elem.nodeDesc));
            });
            
            commit('injectPersons', data);
        });
    },

    getDepts({ commit }){
        axios.get('').then((data) => {
            commit('injectPersons', data);
        });
    }
}