const Router = require('koa-router');
const router = new Router();
const { indexController } = require('./controller/indexController');
const { userController } = require('./controller/userController');


// 添加路由
router
  .get('/', indexController)
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
  .get('/user', userController)

router
  .get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
    await next();
  });

module.exports = router;