 /**
 * Configurations of logger.
 */
  const winston = require('winston');
  const winstonRotator = require('winston-daily-rotate-file');
//   import winston from 'winston/lib/winston/config';
//   import winstonRotator from 'winston/lib/winston/config';
  const consoleConfig = [
    new winston.transports.Console({
      'colorize': true
    })
  ];
  
  const createLogger = new winston.Logger({
    'transports': consoleConfig
  });
  
  const successLogger = createLogger;
  successLogger.add(winstonRotator, {
    'name': 'access-file',
    'level': 'info',
    'filename': './loggers/access.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
  });
  
  const errorLogger = createLogger;
  errorLogger.add(winstonRotator, {
    'name': 'error-file',
    'level': 'error',
    'filename': './logs/error.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
  });
  
  module.exports = {
    'successlog': successLogger,
    'errorlog': errorLogger
  };