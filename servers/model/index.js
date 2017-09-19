'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _commonPassenger = require('./commonPassenger');

var _commonPassenger2 = _interopRequireDefault(_commonPassenger);

var _lodash = require('./lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TODO = function () {
    function TODO() {
        (0, _classCallCheck3.default)(this, TODO);

        this.mapPersons = null;
        this.root = null;
    }

    (0, _createClass3.default)(TODO, [{
        key: 'changeMap',
        value: function changeMap(data) {
            if (this.mapPersons) {
                return this.mapPersons;
            }
            var map = {};
            data.forEach(function (item) {
                map[item.domainDeptID] = item;
            });
            this.mapPersons = map;
            return map;
        }
        /**
         * 获得根元素
         */

    }, {
        key: 'getRoot',
        value: function getRoot() {

            if (this.root) return this.root;
            var root = [];
            if (!_data2.default.deptUserTreeBos.length) {
                return this.root = root;
            }

            root = _data2.default.deptUserTreeBos[0];
            if (root.foreNodeCode === root.domainDeptID) {
                return this.root = root;
            }

            root = this.data.filter(function (item) {
                return item.domainDeptID === item.foreNodeCode;
            });
            if (root.length) {
                return this.root = root[0];
            }
            return this.root = root;
        }

        /**
         *
         * @param {*} p_id 父id
         */

    }, {
        key: 'getInfoByType',
        value: function getInfoByType(p_id) {

            var departLength = 0;
            var staffLength = 0;
            var list = _data2.default.deptUserTreeBos.filter(function (item) {
                if (item.foreNodeCode === p_id && item.foreNodeCode !== item.domainDeptID) {
                    return item;
                }
            });
            return list;
        }

        /**
        * 獲得員工和部门信息
        * 1.如果部门和员工同时存在，把员工加入未分配组
        * 2.只有员工，则展示员工组件
        */

    }, {
        key: 'getDeptAndStaff',
        value: function getDeptAndStaff() {
            var p_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var special = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (special === 'NeverAllot') {}
            if (p_id === '') {
                p_id = this.getRoot().domainDeptID;
            }
            var list = this.getInfoByType(p_id);
            return list;
        }
    }, {
        key: 'getCommonPassIds',
        value: function getCommonPassIds() {
            return _lodash2.default.map(_commonPassenger2.default, 'StaffNo');
        }

        /**
         * 获得常用乘车人
         */

    }, {
        key: 'getCommonPassengerList',
        value: function getCommonPassengerList() {
            var hashMap = this.changeMap(_data2.default.deptUserTreeBos);
            var ids = this.getCommonPassIds();
            return ids.map(function (id) {
                return hashMap[id];
            }).filter(function (item) {
                return item;
            });
        }
    }, {
        key: 'getDepartNames',
        value: function getDepartNames(p_id) {
            var hashMap = this.changeMap(_data2.default.deptUserTreeBos);
            var departNames = [];
            while (hashMap[p_id]) {

                if (hashMap[p_id].foreNodeCode === hashMap[p_id].domainDeptID) {
                    return departNames.reverse();
                }

                departNames.push(hashMap[p_id].nodeDesc + "|" + hashMap[p_id].foreNodeCode);

                p_id = hashMap[p_id].foreNodeCode;
            }

            return departNames.reverse();
        }
    }]);
    return TODO;
}();

;

exports.default = TODO;