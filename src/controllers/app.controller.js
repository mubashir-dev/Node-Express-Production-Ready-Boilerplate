const { appService } = require('../services/app.service');
const { responseHandler } = require('../config/response.config');
async function systemCheck(req, res, next) {
  try {
    const response = await appService.loll(req, res, next);
    return responseHandler({
      response: res,
      message: response.message,
      isSuccess: true,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  appController: {
    systemCheck,
  },
};
