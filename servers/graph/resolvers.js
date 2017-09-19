'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../model/index');

var resolvers = {

    Query: {
        passenger: function passenger(_, args) {
            console.log('args', args);
            return (0, _index.getDeptAndStaff)(args);
        },

        commonPassenger: function commonPassenger(_, args) {
            return (0, _index.getCommonPassengerList)();
        },

        departNames: function departNames(_, args) {
            return (0, _index.getDepartNames)(args);
        },

        companyInfo: function companyInfo(_, args) {
            return (0, _index.getRoot)();
        }
    }
};

exports.default = resolvers;