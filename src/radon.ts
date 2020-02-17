import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as json from 'koa-json';

const port = 8080;
const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = { msg: 'Hellow' };
    await next();
});

app.use(json());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
