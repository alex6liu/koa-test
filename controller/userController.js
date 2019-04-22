const userService = require('../service/user');

const userController = async (ctx, next) => {
  await ctx.render('../view/user', {
    
  })
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