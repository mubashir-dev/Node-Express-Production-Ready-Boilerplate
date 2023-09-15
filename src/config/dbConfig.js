const Sequelize = require('sequelize');
const { database } = require('../common/config');

const sequelize = new Sequelize(database.host, database.user, database.password, {
  host: database.host || 'localhost',
  dialect: database.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
