const { responseHandler } = require('../config/response.config');
const CustomError = require('../config/error-handler.config');

const globalErrorHandler = (err, request, response, next) => {
  const originalError = err;
  if (!(err instanceof CustomError)) {
    if (err instanceof Error) {
      err = new CustomError({
        message: err.message,
      });
    }
  }
  console.error('error', `URL: ${request.url}`, {
    meta: { error: originalError.stack, body: request },
  });

  return responseHandler({
    response,
    message: err.message,
    result: null,
    code: err.code || 500,
    errors: err.errors ?? err,
    isSuccess: false,
  });
};

module.exports = {
  globalErrorHandler,
};
