const http = require('http');
const express = require('express');
const cors = require('cors');
const { mainRouter } = require('./routes/index');
const { logger, responseHandler } = require('./utils');
const { GlobalErrorHandler, RequestLogger } = require('./middlewares');

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection Details::${err}`);
});
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception Details::${err}`);
});

const app = express();
app.server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => RequestLogger(req, res, next));
app.use(cors());
app.use(mainRouter);

// global error handler
app.use((err, req, res, next) => GlobalErrorHandler(err, req, res, next));

// 404
app.use('*', (req, res, next) => {
  return responseHandler({
    response: res,
    code: 404,
    message: 'Not Found',
    isSuccess: false,
  });
});

app.server.listen(process.env.PORT || 4000, async () => {
  logger.info(
    `🚀 Started server on => http://localhost:${app.server.address().port}`,
  );
});
