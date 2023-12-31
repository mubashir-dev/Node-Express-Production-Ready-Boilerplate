const { appService } = require('../services/app.service');
const { responseHandler } = require('../utils');
async function systemCheck(req, res, next) {
  try {
    const response = await appService.status(req, res, next);
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
