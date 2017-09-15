import { find } from './utils';

export default {

    CHOOSE_BY_ID (state, id) {
        let current = find(state, id);
        state.choosedPersons.push(current);
    },
    
    /**
     * 注入從服務端取出的數據
     * @param {*State} state 
     * @param {*Person} Persons 
     */
    INJECT_PERSONS(state, Persons){
        state.Persons = Persons;
    },
    /**
     * 改变 是否显示常用联系人
     * @param {*State} state 
     * @param {*boolean} show 是否显示常用联系人
     */
    CHANGE_COM_CONTRACT(state, show){
        state.comContractIsShow = show;
    },
    /**
     * 设置只选择一个乘车人，将maxNum设置为1
     * @param {*State} state 
     */
    SET_SINGLE(state){
        state.maxNum = 1;
    },

    INJECT_ROOT(state, {companyNO, companyName}){
        state.root.companyNO = companyNO;
        state.root.companyName = companyName;
    },

    INSERT_COMMON_PASSENGERS(state, compassengers){
        if(typeof compassengers === 'string'){
            state.commonPersons.push(compassengers);
        }else {
            state.commonPersons.push(...compassengers);
        }
    }
  }