const indexController = async (ctx, next) => {
  await ctx.render('index', {
    title: 'hi'
  })
}

module.exports = {
  indexController,
};