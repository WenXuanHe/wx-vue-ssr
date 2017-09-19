'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _apis = require('./routes/apis');

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var router = (0, _koaRouter2.default)();
var bodyparser = (0, _koaBodyparser2.default)();
var way = {
  dist: _path2.default.resolve(__dirname, '../', 'dist'),
  views: _path2.default.resolve(__dirname + '../', +'views')
};
// error handler
(0, _koaOnerror2.default)(app);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: way.views,
  autoescape: true,
  cache: 'memory',
  ext: 'html',
  writeBody: true
}));

// middlewares
app.use(bodyparser);
app.use((0, _koaJson2.default)());
app.use(require('koa-static')(way.dist));
// app.use(historyFallback())
app.use((0, _koaViews2.default)(way.views), {
  extension: 'html'
});

app.use(_index2.default.routes(), _index2.default.allowedMethods());
app.use(_apis2.default.routes(), _apis2.default.allowedMethods());
var port = 80;
app.listen(port);
console.log('server on ' + port);