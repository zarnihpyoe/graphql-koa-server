import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.listen(3000, () => console.log('server running at port 3000'))
