"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var typeDefs = "\n\ntype Passenger {\n    domainDeptID: String\n    type: Int\n    nodeDesc: String\n    deptNodeName: String\n    foreNodeCode: String\n}\n\ntype Query {\n    passenger(p_id: String): [Passenger],\n    commonPassenger(): [Passenger],\n    departNames(p_id: String):[String],\n    companyInfo():Passenger\n}\n\n";

exports.default = typeDefs;