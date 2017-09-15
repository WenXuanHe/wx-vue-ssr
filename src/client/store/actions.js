import axios from 'axios'
import getCharacter from '../utils/getCharacter'

/**
 * string轉換大寫
 * @param {*string} str  
 */
export const toUpperCase = (str) => { String.prototype.toUpperCase.call(str)}

export default {

    getDeptAndStaff({ commit }, p_id){
        return axios.post('/apis/getDeptAndStaff', {p_id}).then(({data}) => {
            data.forEach(function(elem) {
                if(elem.type === 1){
                    elem.character = toUpperCase(getCharacter.makePy(elem.nodeDesc));
                }
            });
            commit('INJECT_PERSONS', data);
        });
    },

    getCompanyInfo({ commit }){
        return axios.post('/apis/getCompanyInfo').then(({data}) => {
            commit('INJECT_ROOT', data);
        });
    },

    getCommonPassengerList({commit}){
        return axios.post('/apis/getCommonPassengerList').then(({data}) => {
            commit('INSERT_COMMON_PASSENGERS', data);
        });
    }
}