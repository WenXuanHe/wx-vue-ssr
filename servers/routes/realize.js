'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderToString = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _vueServerRenderer = require('vue-server-renderer');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _vueSsrServerBundle = require('../../dist/vue-ssr-server-bundle.json');

var serverBundle = _interopRequireWildcard(_vueSsrServerBundle);

var _vueSsrClientManifest = require('../../dist/vue-ssr-client-manifest.json');

var clientManifest = _interopRequireWildcard(_vueSsrClientManifest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = _fs2.default.readFileSync('./src/index.html', 'utf-8');

// const $ = cheerio.load(template);
var renderer = (0, _vueServerRenderer.createBundleRenderer)(serverBundle, {
    runInNewContext: false, // 推荐
    template: template, // （可选）页面模板
    clientManifest: clientManifest // （可选）客户端构建 manifest
});

var renderToString = exports.renderToString = function renderToString(url) {

    return new _promise2.default(function (resolve, reject) {

        renderer.renderToString({ url: url }, function (err, html) {

            if (err) reject(err);

            resolve(html);
        });
    });
};

exports.default = {
    renderToString: renderToString
};