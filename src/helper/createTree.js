var CreateTree  = function (data) {
    this.data = data;
};

/**
 * 获得根节点
 * @returns {T|*}
 */
CreateTree.prototype.getRoot = function (pIdDesc='pId', idDesc='id') {
    let root = [];
    if(!this.data.length){
        return root;
    }

    root = this.data[0];
    if(root[pIdDesc]=== root[idDesc]){
        return root;
    }

    root = this.data.filter((item) => item[pIdDesc] === item[foreNodeCode]);
    if(root.length){
        return root[0];
    }
    return root;
};

/**
 * 将数据以map的形式构建
 * @param data
 * @returns {{}}
 */
CreateTree.prototype.changeAsMap = function (data, idDesc='id') {
    var map = {};
    data.forEach(function (item) {
        item.children = [];
        map[item[idDesc]] = item;
    });
    return map;
};

/**
 * 遍历原数据结构， 获得每一个对象的pid，在Map里找到对应的id，添加到children中。利用对象是引用传值的特点，实现该功能
 * @returns {*}
 */
CreateTree.prototype.create = function (pIdDesc, idDesc) {
    var root = this.getRoot(pIdDesc, idDesc);
    var map = this.changeAsMap(this.data, idDesc);
    this.data.forEach(function (item) {
        ////排除掉根节点
        if(typeof item[pIdDesc] !== "undefined" && item[pIdDesc] !== item[idDesc]){
            map[item[pIdDesc]] && map[item[pIdDesc]].children.push(item);
        }
    });
    return map[root[idDesc]];
};

module.exports = CreateTree;