import pino from 'pino';

// class Logger {
//   private static instance = pino({
//     level: process.env.LOG_LEVEL || 'info',
//   });

//   static get() {
//     return this.instance;
//   }
// }

// export const logger = Logger.get();
export default pino({});