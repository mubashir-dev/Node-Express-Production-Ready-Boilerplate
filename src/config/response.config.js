const customError = require('./error-handler.config');

const responseHandler = (data) => {
    const {
        response, message, result = null, code = 200, errors = null, isSuccess = true,
    } = data;
    return response.status(code).json({
        code,
        errors,
        message,
        result,
        isSuccess,
    });
};

const globalErrorHandler = (err, request, response, next) => {
    const originalError = err;
    if (!(err instanceof customError)) {
        if (err instanceof Error) {
            err = new customError({
                message: err.message,
            });
        }
    }
    console.error('error', `URL: ${request.url}`, { meta: { error: originalError.stack, body: request } });

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
    responseHandler
}
