export interface Logger {
    (childNamespace: string): Logger;
    debug: (...args: any[]) => void;
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    warning: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

interface CreateLog {
    (namespace?: string): Logger;
    /**
     * @deprecated does nothing
     */
    enable: () => void;
    /**
     * @deprecated does nothing
     */
    disable: () => void;
}

const createLog: CreateLog;

export = createLog;
