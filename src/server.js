import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'

import schema from './data/schema.js'

const app = new Koa()
const router = new Router()
app.use(bodyParser())

router.post('/graphql', graphqlKoa({
  schema,
  context: {},
}))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => console.log('server running at port 3000'))
