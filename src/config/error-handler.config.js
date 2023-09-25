// Standard Error Handler extended from Error class
function CustomError({ message, type = 'UNKNOWN', code = 500 }) {
  const error = new Error(message);
  error.type = type;
  error.code = code;
  error.name = CustomError.name;
  return error;
}

module.exports = CustomError;
