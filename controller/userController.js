const userService = require('../service/user');

const userController = async (ctx, next) => {
  ctx.response.body = 
  `
    <form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：i"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：1"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
  `;
}

const register = async (ctx, next) => {
  let {name, password} = ctx.request.body
  let data = await userService.register(name, password)
  ctx.response.body = data
}

module.exports = {
  userController,
  register
};