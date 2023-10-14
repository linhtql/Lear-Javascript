// export const TYPE_LOG = 'log';
// export const TYPE_ERROR = 'error';
// export const TYPE_WARNING = 'warn';
import {
    TYPE_LOG,
    TYPE_ERROR,
    TYPE_WARNING
} from './constants.js'

function logger(log, type = TYPE_LOG) {
    console[type] (log);
}

export default logger;