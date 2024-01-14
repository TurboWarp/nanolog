// only use colors in non-browser environments
const addColors = typeof document === 'undefined';

const RESET = addColors ? '\u001b[0m' : '';
const GRAY = addColors ? '\u001b[90m' : '';
const BLUE = addColors ? '\u001b[34m' : '';
const CYAN = addColors ? '\u001b[36m' : '';
const YELLOW = addColors ? '\u001b[33m' : '';
const RED = addColors ? '\u001b[31m' : '';

const DEBUG = `${BLUE}debug${RESET}`;
const INFO = `${CYAN}info${RESET}`;
const WARN = `${YELLOW}warn${RESET}`;
const ERROR = `${RED}error${RESET}`;

let enabled = false;

const createLog = (namespace = '') => {
    const log = (childNamespace) => createLog(namespace ? `${namespace} ${childNamespace}` : childNamespace);

    const formattedNamespace = namespace ? [`${GRAY}${namespace}${RESET}`] : [];

    log.debug = log.log = (...args) => {
        if (enabled) console.debug(...formattedNamespace, DEBUG, ...args);
        return log;
    };
    log.info = (...args) => {
        if (enabled) console.info(...formattedNamespace, INFO, ...args);
        return log;
    };
    log.warn = log.warning = (...args) => {
        if (enabled) console.warn(...formattedNamespace, WARN, ...args);
        return log;
    };
    log.error = (...args) => {
        if (enabled) console.error(...formattedNamespace, ERROR, ...args);
        return log;
    };

    return log;
};

createLog.enable = () => {
    enabled = true;
    return createLog;
};
createLog.disable = () => {
    enabled = false;
    return createLog;
};

module.exports = createLog;
