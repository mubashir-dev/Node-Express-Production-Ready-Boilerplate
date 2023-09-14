// Standard Error Handler extended from Error class
function customError({ message, type = 'UNKNOWN', code = 500 }) {
    const error = new Error(message);
    error.type = type;
    error.code = code;
    error.name = customError.name;
    return error;
}

module.exports = customError;
