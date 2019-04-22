
const indexController = async (ctx, next) => {
  await ctx.render('index', {
    title: 'welcome to koa test project',
  })
}

const submit = async (ctx, next) => {
  await ctx.render('index', {
    title: 'welcome to koa test project'
  })
}

module.exports = {
  indexController,
  submit
};