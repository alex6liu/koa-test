const router = require('koa-router')()
const db = require('../utils/db')
const User = require('../schema/user')
const svgCaptcha = require('svg-captcha');

// 连数据库
db()

// 生成验证码
const captcha = svgCaptcha.create();

router.get('/signup', async (ctx, next) => {
  ctx.status = 200;
  ctx.type = 'svg';
  ctx.body = captcha.data;
})

router.post('/signup', async (ctx, next) => {
  const data = ctx.request.body
  const user = {
    username: data.username,
    email: data.email,
    password: data.password
  }
  const newUser = new User(user);

  try {
    let res = await newUser.save()
    if (res) {
      ctx.body = {
        code: 0,
        status: 200,
        message: '注册成功'
      }
    }
  }
  catch (err) {
    if (err.code === 11000) {
      ctx.body = {
        code: -1,
        status: 200,
        message: '此邮箱已注册'
      }
    } else {
      ctx.body = {
        code: 999,
        status: 200,
        message: '未知错误'
      }
    }
  }
})

module.exports = router