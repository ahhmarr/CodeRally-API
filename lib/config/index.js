const dotenv = require("dotenv");
const log4js = require("log4js");

dotenv.config({ path: `${process.cwd()}/env` });
const logger = log4js.getLogger();

logger.level = process.env.LOGGER_LEVEL || "info";
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;
const approvalUrl = process.env.APPROVAL>URL;

module.exports = {
  logger,
  port,
  mongoUrl,
  approvalUrl
};