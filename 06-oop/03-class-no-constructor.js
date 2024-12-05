class Logger {

  //A default constructor - created by JS
  // constructor() {} 

    log(message) {
      console.log(`[LOG]: ${message}`);
    }
  
    error(message) {
      console.error(`[ERROR]: ${message}`);
    }
  
    warn(message) {
      console.warn(`[WARNING]: ${message}`);
    }
  }
  
  // Creating an instance of Logger without parameters
  const logger = new Logger();
  
  // Using the Logger methods
  logger.log("This is a regular log message");
  logger.error("An error occurred");
  logger.warn("This is a warning");