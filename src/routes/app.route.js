const { appController } = require('../controllers');
const { Router } = require('express');
const appRouter = new Router()


//app status endpoint
appRouter.get(`/status`, appController.systemCheck);

module.exports = appRouter;

