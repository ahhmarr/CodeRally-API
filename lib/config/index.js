const dotenv = require("dotenv");
const log4js = require("log4js");

dotenv.config({ path: `${process.cwd()}/env` });
const logger = log4js.getLogger();

logger.level = process.env.LOGGER_LEVEL || "info";
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;
const approvalUrl = process.env.APPROVAL_URL;
const approvalKey = process.env.APPROVAL_KEY;
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  logger,
  port,
  mongoUrl,
  approvalUrl,
  approvalKey,
  isProduction,
  isDevelopment,
  isTest
};