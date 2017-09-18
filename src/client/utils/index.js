
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

export default {
    MapMembers
}
