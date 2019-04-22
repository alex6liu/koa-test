## koa学习

[参考](https://github.com/ikcamp/koa2-tutorial/)

## 模板引擎 koa-views / ejs

### 使用
```npm i koa-views```

``` js
app.use(hbs.middleware({
  viewPath: __dirname + '/views'
}));
```