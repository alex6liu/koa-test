const router = require('koa-router')()
const mongoose = require('mongoose')

// 连接mongodb
const uri = 'mongodb+srv://tknnn:lbq1993727@backend-api-kxfgn.mongodb.net/test?retryWrites=true'
mongoose.connect(uri)
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connect to db');
});

db.on('error', (err) => {
  console.log(err);
});

// 账户的数据库模型
const UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  email:{type:String,unique:true,dropDups: true}
});

const User = mongoose.model('User', UserSchema);

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/signup', async (ctx, next) => {
  const data = ctx.request.body
  const user = {
    username: data.username,
    email: data.password,
    password: data.password
  }
  const newUser = new User(user);
  newUser.save(err => {
    if (err.code === 11000) {
      console.log('邮箱已经被使用')
    } else {
      console.log(err);
    }
  });
})

router.post('/signin', async (ctx, next) => {
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
