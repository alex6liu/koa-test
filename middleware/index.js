const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');
const staticFiles = require('koa-static');
const miSend = require('./mi-send');

module.exports = (app) => {
  app.use(staticFiles(path.resolve(__dirname, "../public")))

  // 加载模板引擎
  app.use(views(path.join(__dirname, '../view'), {
    extension: 'ejs'
  }))

  app.use(bodyParser())
  app.use(miSend())
}