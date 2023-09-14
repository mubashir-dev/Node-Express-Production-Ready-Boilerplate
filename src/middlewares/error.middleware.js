const { responseHandler } = require('../config/response.config');
const customError = require('../config/error-handler.config');
const { logger } = require('../utils/logger.util');

const GlobalErrorHandler = (err, request, response, next) => {
    const originalError = err;
    if (!(err instanceof customError)) {
        if (err instanceof Error) {
            err = new customError({
                message: err.message,
            });
        }
    }
    logger.error(`URL: ${request.url}`, { meta: { error: originalError.stack, body: request } });

    return responseHandler({
        response,
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
<<<<<<< HEAD
  globalErrorHandler,
};
=======
    GlobalErrorHandler
}
>>>>>>> 4743e19 (feat(logger):updated logger functionality)
