require('dotenv').config();

const config = {
  appMode: process.env.NODE_ENV || 'development',
  apiVersion: process.env.API_VERSION || 'v1',
  nodeServicePort: process.env.NODE_SERVICE_PORT || 4000,
  database: {
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    name: process.env.MYSQL_DB_NAME,
    logging: process.env.MYSQL_DB_LOGGING,
    max: process.env.MYSQL_DB_POOL_MAX,
    min: process.env.MYSQL_DB_POOL_MIN,
    acquire: process.env.MYSQL_DB_POOL_MYSQL_DB_POOL_ACQUIRE,
    idle: process.env.MYSQL_DB_POOL_MYSQL_DB_POOL_IDLE,
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
