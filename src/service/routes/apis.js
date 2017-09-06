let router = require('koa-router')();
let TODO = require('../model/index');

router.post('/apis/getDeptAndStaff', async (ctx, next) => {
    let { p_id } = ctx.request.body
    let todo = new TODO();
    return ctx.body = todo.getDeptAndStaff(p_id);
});
router.post('/apis/getCompanyInfo', async (ctx, next) => {
    let todo = new TODO();
    return ctx.body = todo.getRoot();
});

module.exports = router
