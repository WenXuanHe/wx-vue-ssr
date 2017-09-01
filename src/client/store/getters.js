
const choosedPersons = (state) => state.Persons.filter((item) => item.choosed);

export default {
    /**
     * 篩選只篩沒有被選則的數據
     */
    searchedPersons: (state) => {
        let {Persons, searchVal} = state;
        return Persons.filter((person)=>{
            return !person.choosed && person.nodeDesc.indexOf(searchVal)
        });
    },
    // 已选择的人数
    choosedPersons: choosedPersons,

    characters: (state) => {
        let {Persons, searchVal} = state;
    },

    //是否超过最大可选人数
    exceedMax: (state) => choosedPersons(state).length > state.maxNum
    
}
