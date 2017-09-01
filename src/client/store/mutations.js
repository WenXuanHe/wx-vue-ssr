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

    increment(state){
        state.count++;
    }
  }