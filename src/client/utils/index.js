import actions from '$store/actions' 

export const  MapMembers =  function (Members) {
    var map = {};
    Members.forEach((item) => {
        if (map[item.character]) {
            map[item.character].push(item);
        } else {
            map[item.character] = [];
        }
    });
    return map;

}

export const asyncData = function({store, router}){
    return Promise.all([
        actions.getDeptAndStaff({commit: store.commit}, {p_id: router.params.p_id}),
        actions.getCommonPassengerList({commit: store.commit}),
        actions.getDepartNames({commit: store.commit}, router.params.p_id),
        actions.getCompanyInfo({commit: store.commit})
    ])
}

export default {
    MapMembers,
    asyncData
}
