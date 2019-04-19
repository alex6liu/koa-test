const Router = require('koa-router');

const router = new Router();

// 添加路由
router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`
});

router.get('/home', async (ctx, next) => {
  ctx.response.body = '<h1>HOME page</h1>'
});

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
});

module.exports = router;