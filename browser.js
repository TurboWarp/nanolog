const createLog = (namespace = '') => {
    const log = (childNamespace) => createLog(namespace ? `${namespace} ${childNamespace}` : childNamespace);

    const formattedNamespace = namespace ? [namespace] : [];

    log.debug = log.log = console.debug.bind(console, ...formattedNamespace, 'debug');
    log.info = console.log.bind(console, ...formattedNamespace, 'info')
    log.warn = log.warning = console.warn.bind(console, ...formattedNamespace, 'warn')
    log.error = console.error.bind(console, ...formattedNamespace, 'error');

    return log;
};

/**
 * @deprecated does nothing
 */
createLog.enable = createLog.disable = () => {};

module.exports = createLog;
