const { responseHandler } = require('../config/response.config');
const CustomError = require('../config/error-handler.config');
const { logger } = require('../utils/logger.util');

const GlobalErrorHandler = (err, request, response, next) => {
  const originalError = err;
  if (!(err instanceof CustomError)) {
    if (err instanceof Error) {
      err = new CustomError({
        message: err.message,
      });
    }
  }
  logger.error(`URL: ${request.url}`, {
    meta: { error: originalError.stack, body: request },
  });
  return responseHandler({
    response,
    message: err.message,
  });
};

module.exports = {
  GlobalErrorHandler,
};
