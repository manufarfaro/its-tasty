import Koa from 'koa';
import koaBody from 'koa-body';
import recipes from './recipes.js'

const app = new Koa();

app.use(koaBody());

app.use(recipes.routes());


export default app;
