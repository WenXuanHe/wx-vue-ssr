let data = require('./data');

class TODO {

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
            p_id = this.getRoot();
        }
        return this.getInfoByType(p_id);
    }

};

module.exports = TODO;

