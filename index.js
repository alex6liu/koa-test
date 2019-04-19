const Koa = require('koa');
const app = new Koa();
const router = require('./router');

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
});