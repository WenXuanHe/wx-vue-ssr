import {renderToString} from './realize'
import Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from '../graph/schema'
const router = Router()

router.get('/', async (ctx, next) => {

    await ctx.redirect('/index')
})

router.get(/\/(index|selectStaff)(\/:p_id)?/, async function (ctx, next) {

    try {
        let html = await renderToString(ctx.req.url)
        ctx.body = html
    } catch (e) {
        console.error("vue-ssr-error", e)
    }
})

router.post('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa({schema: schema}));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

export default router