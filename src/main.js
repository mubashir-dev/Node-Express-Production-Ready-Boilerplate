const http = require('http');
const express = require('express');
const cors = require('cors');
const { mainRouter } = require('./routes/index');
<<<<<<< HEAD
const { globalErrorHandler } = require('./middlewares/error.middleware');
=======
const { logger } = require('./utils/logger.util');
const { GlobalErrorHandler, RequestLogger } = require("./middlewares");
>>>>>>> 4743e19 (feat(logger):updated logger functionality)

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection Details::${err}`);
});
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception Details::${err}`);
});

const app = express();
app.server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use((req, res, next) => RequestLogger(req, res, next));
app.use(cors());
app.use(mainRouter);

//global error handler
app.use((err, req, res, next) => GlobalErrorHandler(err, req, res, next));

app.server.listen(process.env.PORT || 4000, async () => {
    logger.info(`🚀 Started server on => http://localhost:${app.server.address().port}`);
});
