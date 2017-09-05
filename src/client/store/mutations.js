export default {
    chooseByID (state, id) {
      state.Persons.forEach(function(item){
          if(item.id === id && !item.choosed){
              item.choosed = true;
          }
      });
    },
    
    /**
     * 注入從服務端取出的數據
     * @param {*State} state 
     * @param {*Person} Persons 
     */
    injectPersons(state, Persons){
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
    increment(state){
        state.count++;
    }
  }