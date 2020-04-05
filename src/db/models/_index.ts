import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
import { log, error } from "winston";
const config = require("../../config/sequelize-config.json");
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig
);

try {
  sequelize.authenticate();
  log("info", "Connection has been established successfully");
} catch (err) {
  error("db-error", "Unable to connect to the database:", error);
}

export default sequelize;
