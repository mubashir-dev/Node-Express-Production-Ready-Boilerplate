const appRouter = require('./app.route');
const { Router } = require('express');
const mainRouter = new Router();
const versionRouter = new Router();
mainRouter.use(`/api/v1`, versionRouter);

// ping server
versionRouter.use('/app', appRouter);

module.exports = { mainRouter };
