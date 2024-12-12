// logger.js
import { logger } from 'react-native-logs';

const config = {
    severity: __DEV__ ? 'debug' : 'error',
  transportOptions: {
    colors: {
        custom: "white",
        devNotice: "blue",
        info: "green",
        warn: "yellowBright",
        error: "redBright",
        debug: "blueBright",
    },
  },

};

const log = logger.createLogger(config);

export default log;
