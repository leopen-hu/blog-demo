const Koa = require('koa');
const router = require('koa-router')();

const Article = require('./my-schema');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

router.get('/hello/:name', async (ctx, next) => {
  let name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>`
});

router.get('/api', async (ctx, next) => {
  var result;
  await Article.find((err, _result) => {
    result = _result;
    console.log(result);
  });
  ctx.response.body = result;
})

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');