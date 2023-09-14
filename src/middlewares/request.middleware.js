const { logger } = require("../utils/logger.util");

const RequestLogger = (request, response, next) => {
    if (!response.finished) {
        const { ip, method, url } = request;
        const { statusCode } = response;
        const hostname = require('os').hostname();
        const userAgent = request.get('user-agent') || '';
        logger.info(
            `[hostname: ${hostname}] [method : ${method}] [url: ${url}] [status : ${statusCode}] [userAgent:[${userAgent}] Ip:[${ip}]]`
        );
    }
    next();
};

module.exports = {
    RequestLogger
}