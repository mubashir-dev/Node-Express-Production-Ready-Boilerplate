require('dotenv').config();

const config = {
  appMode: process.env.NODE_ENV || 'development',
  apiVersion: process.env.API_VERSION || 'v1',
  nodeServicePort: process.env.NODE_SERVICE_PORT || 4000,
  database: {
    dialect:process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    logging: process.env.DB_LOGGING,
    max: process.env.DB_POOL_MAX,
    min: process.env.DB_POOL_MIN,
    acquire: process.env.DB_POOL_ACQUIRE,
    idle: process.env.DB_POOL_IDLE,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  JWT: {
    authToken: process.env.JWT_AUTH,
    timeout: process.env.JWT_TIMEOUT,
  },
};

module.exports = config;
