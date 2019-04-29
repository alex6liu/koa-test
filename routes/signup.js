const router = require('koa-router')()
const db = require('../utils/db')
const User = require('../schema/user')

db()

router.get('/signup', async (ctx, next) => {
  ctx.body = {
    message: 'hi'
  }
})

router.post('/signup', async (ctx, next) => {
  const data = ctx.request.body
  const user = {
    username: data.username,
    email: data.email,
    password: data.password
  }
  const newUser = new User(user);

  var code
  newUser.save(err => {
    if (!err) {
      code = 0
    } else if (err.code == 11000) {
      code = -1
    } else {
      code = 999
    }
  });

  if (code === 0) {
    ctx.body = {
      code: 0,
      status: 200,
      message: '注册成功'
    }
  } else if (code === -1) {
    ctx.body = {
      code: -1,
      status: 200,
      message: '邮箱已存在'
    }
  } else {
    ctx.body = {
      code: 999,
      status: 200,
      message: '未知错误'
    }
  }

})

module.exports = router