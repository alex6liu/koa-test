const Router = require('koa-router');
const router = new Router();
const { userController, register } = require('./controller/userController');


// 添加路由
router
  .get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
    await next();
  })
  .post('/', async (ctx, next) => {
    // ...
  })
  .put('/', async (ctx, next) => {
    // ...
  })
  .del('/', async (ctx, next) => {
    // ...
  })
  .all('/*', async (ctx, next) => {
    // *代表允许来自所有域名请求
    ctx.set("Access-Control-Allow-Origin", "*");
    // 其他一些设置...
    await next();
  });

router
  .get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>';
    await next();
  });

router
  .get('/user', userController)
  .post('/user/register', register);

router
  .get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
    await next();
  });

module.exports = router;