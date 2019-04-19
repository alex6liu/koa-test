const Router = require('koa-router');

const router = new Router();

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
  .get('/user', async (ctx, next) => {
    ctx.response.body = 
    `
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `;
    await next();
  })
  .post('/user/register', async (ctx, next) => {
    let {name, password} = ctx.request.body
    if( name === 'ikcamp' && password === '123456' ){
      ctx.response.body = `Hello， ${name}！`
    }else{
      ctx.response.body = '账号信息错误'
    }
    await next();
  });

router
  .get('/404', async (ctx, next) => {
    ctx.response.body = '<h1>404 Not Found</h1>';
    await next();
  });

module.exports = router;