import Router from 'koa-router';

const router = new Router({
    prefix: '/recipes'
});

let recipes = [
    {
        id: 0,
        title: 'Stuffed Tomatoes with Rice',
        imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps24703_CW10496D31C.jpg',
        difficulty: 3,
        description: 'Here\'s a pretty side dish that will please everyone who tastes it. Stuffed with brown or white rice, these tomatoes can be prepared ahead and baked hours later-so they\'re perfect for a busy hostess. '
    }
];

router.get('/', async function(ctx, next) {
    ctx.body = recipes;
    next();
});

router.get('/:id', async function (ctx, next) {
    const { params } = ctx;
    const recipesMatched = recipes.filter(recipe => recipe.id === parseInt(params.id));
    if (recipesMatched.length) {
        ctx.body = recipesMatched[0];
    } else {
        ctx.response.status = 404;
    }

    next();
});

router.post('/', async function (ctx, next) {
    const { body: { title, imageUrl, difficulty, description } } = ctx.request;

    recipes.push({
        id: recipes.length,
        title,
        imageUrl,
        difficulty,
        description
    });

    ctx.response.status = 401;
    ctx.body = recipes[recipes.length - 1];
    next();
});

router.delete('/:id', async function(ctx, next) {
    const { params } = ctx;

    let indexToDelete;

    recipes.forEach(function(recipe, index) {
        if (recipe.id === parseInt(params.id)) {
            indexToDelete = index;
        }
    });

    if(indexToDelete) {
        recipes.splice(indexToDelete, 1);
        ctx.response.status = 200;
    } else {
        ctx.response.status = 404;
    }

    next();
});

export default router;
