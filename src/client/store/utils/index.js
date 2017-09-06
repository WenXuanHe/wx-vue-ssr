export var find = function(state, id){
    var List = state.Persons;
    while(List.length){
        let current = List.shift();
        if(current.domainDeptID === id){
            return current;
        }
        if(current.childern && current.childern.length){
            [].push.apply(List, current.childern);
        }
    }
}

export var filterBy = function(Persons, fieldName, fieldValue){
    var list = Persons;
    var result = [];
    while(list.length){
        let current = List.shift();
        if(current.type === 2){
            [].push.apply(List, current.childern);
        }else{
            if(current[fieldName] === fieldValue){
                result.push(current);
            }
        }
    }
    return result;
}

export default {
    find,
    filterBy,

}