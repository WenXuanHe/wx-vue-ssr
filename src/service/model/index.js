let data = require('./data');
let commonPassenger = require('./commonPassenger');
let _ = require('lodash');

class TODO {

    changeMap(data){
        var map = {};
        data.forEach(function(item){
            map[item.domainDeptID] = item;
        });
        return map;
    }
    /**
     * 获得根元素
     */
    getRoot() {

        let root = [];
        if (!data.deptUserTreeBos.length) {
            return root;
        }

        root = data.deptUserTreeBos[0];
        if (root.foreNodeCode === root.domainDeptID) {
            return root;
        }

        root = this.data.filter((item) => item.domainDeptID === item.foreNodeCode);
        if (root.length) {
            return root[0];
        }
        return root;
    }

    // 补全数据
    completeData(data) {
        if(data.type === 1){
            data.choosed = false;
            data.isCommon = false;
            data.character = false;
        }else{
            data.children = [];
        }
    }

    /**
     *
     * @param {*} p_id 父id
     */
    getInfoByType(p_id) {

        return data.deptUserTreeBos.filter((item) => {
            this.completeData(item);
            return item.foreNodeCode === p_id;
        });
    }

    /**
    * 獲得員工和部门信息
    */
    getDeptAndStaff(p_id = '') {
        if (p_id === '') {
            p_id = this.getRoot().domainDeptID;
        }
        let result = this.getInfoByType(p_id);
        return result;
    }

    getCommonPassIds(){
        return _.map(commonPassenger, 'StaffNo');
    }

    /**
     * 获得常用乘车人
     */
    getCommonPassengerList(){
        var hashMapById = this.changeMap(data.deptUserTreeBos);
        var ids = this.getCommonPassIds();
        return ids.map(id => hashMapById[id]).filter((item) => item);
    }
};

module.exports = TODO;

