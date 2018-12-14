const Koa = require('koa');
const pino = require('pino');

const app = new Koa();

const logger = pino();
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  logger.info('Server listening on port 3000')
})
