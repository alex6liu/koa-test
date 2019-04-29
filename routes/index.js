const router = require('koa-router')()
const db = require('../utils/db')
const User = require('../schema/user')

db()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/', async (ctx, next) => {
  const data = ctx.request.body
  let userLogin;
  // if (data.username) {
  //   user = {
  //     username: data.username,
  //     password: data.password
  //   }
  // }

  if (data.email) {
    userLogin = {
      email: data.email,
      password: data.password
    }
  }
  User.findOne({email:userLogin.email}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (userLogin.password === user.password) {
        console.log('登录成功');
      } else {
        console.log('密码错误');
      }
    }
  })
  
})

module.exports = router
