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



module.exports = {
    responseHandler
}
