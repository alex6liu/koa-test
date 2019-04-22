const Koa = require('koa');
const app = new Koa();
const middleware = require('./middleware')
const router = require('./router');

middleware(app)
// 加载路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
});