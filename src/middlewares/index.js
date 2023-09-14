const { GlobalErrorHandler } = require("./error.middleware");
const { RequestLogger } = require("./request.middleware");

module.exports = {
    GlobalErrorHandler,
    RequestLogger
}