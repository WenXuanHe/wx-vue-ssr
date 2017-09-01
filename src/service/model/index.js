let data = require('./data');
let CreateTree = require('../../helper/createTree');
module.exports = {

    /**
     * 
     * @param {*} type 1 員工， 2 部門
     */
    getInfoByType(type){
        return (deptNo) => data.deptUserTreeBos.filter((item) => {

                if (typeof item.choosed === 'undefined') item.choosed = false;

                return deptNo ? (item.type === type && item.foreNodeCode === deptNo) : (item.type === type)
            }
        )
    },
    /**
     * 獲得部門
     */
    getDept(){
        let getDept = this.getInfoByType(2);
        return getDept();
    },
    /**
     * 獲得員工
     */
    getStaff(deptNo=''){
        let getStaff = this.getInfoByType(1);
        return getStaff(deptNo);
    },

    createTree(){
        var createTree = new CreateTree(data);
        return createTree.create('foreNodeCode', 'domainDeptID');
    }
};
