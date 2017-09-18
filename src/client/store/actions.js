import axios from 'axios'
import getCharacter from '../utils/getCharacter'

/**
 * string轉換大寫
 * @param {*string} str  
 */
export const toUpperCase = (str) => String.prototype.toUpperCase.call(str)

export default {

    getDeptAndStaff({ commit }, {p_id, success}){
        return axios.get('/apis/getDeptAndStaff', {params:{p_id}}).then(({data}) => {
            data.forEach(function(elem) {
                if(elem.type === 1){
                    elem.character = toUpperCase(getCharacter.makePy(elem.nodeDesc)[0].slice(0, 1));
                }
            });
            success && success(data);
            commit('INJECT_PERSONS', data);
        });
    },

    getCompanyInfo({ commit }){
        return axios.get('/apis/getCompanyInfo').then(({data}) => {
            commit('INJECT_ROOT', {companyName:data.nodeDesc, companyNO:data.domainDeptID});
        });
    },

    getDepartNames({commit}, p_id){
        return axios.get('/apis/getDepartNames', {params:{p_id}}).then(({data}) => {
            commit('INSERT_DEPART_NAMES', data);
        });
    },

    getCommonPassengerList({commit}){
        return axios.get('/apis/getCommonPassengerList').then(({data}) => {
            commit('INSERT_COMMON_PASSENGERS', data);
        });
    }
}