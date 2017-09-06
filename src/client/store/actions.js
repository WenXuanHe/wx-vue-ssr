import axios from 'axios'
import getCharacter from '../utils/getCharacter'

/**
 * string轉換大寫
 * @param {*string} str  
 */
export const toUpperCase = (str) => { String.prototype.toUpperCase.call(str)}

export default {

    getDeptAndStaff({ commit }, p_id){
        return axios.post('/apis/getDeptAndStaff', {p_id}).then((Persons) => {
            Persons.forEach(function(elem) {
                if(elem.type === 1){
                    elem.character = toUpperCase(getCharacter.makeBy(elem.nodeDesc));
                }
            });
            commit('INJECT_PERSONS', Persons);
        });
    },

    getCompanyInfo({ commit }){
        return axios.post('/apis/getCompanyInfo').then((data) => {
            commit('INJECT_ROOT', data);
        });
    }
}