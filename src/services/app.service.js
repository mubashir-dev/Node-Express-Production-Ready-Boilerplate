// App Service

async function status(req, res, next) {
  return {
    message: '✅ Server is running',
  };
}

module.exports = {
  appService: {
    status,
  },
};
