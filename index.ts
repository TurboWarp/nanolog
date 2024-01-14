// only use colors in non-browser environments
const runningInsideBrowser = typeof document !== "undefined";
const RESET = runningInsideBrowser ? "" : "\u001b[0m";
const GRAY = runningInsideBrowser ? "" : "\u001b[90m";
const BLUE = runningInsideBrowser ? "" : "\u001b[34m";
const CYAN = runningInsideBrowser ? "" : "\u001b[36m";
const YELLOW = runningInsideBrowser ? "" : "\u001b[33m";
const RED = runningInsideBrowser ? "" : "\u001b[31m";
const DEBUG = `${BLUE}debug${RESET}`;
const INFO = `${CYAN}info${RESET}`;
const WARN = `${YELLOW}warn${RESET}`;
const ERROR = `${RED}error${RESET}`;

let enabled = false;

export default function nanolog(namespace?: string) {
  function self(childNamespace: string) {
    return nanolog(
      namespace ? `${namespace} ${childNamespace}` : childNamespace,
    );
  }
  const formattedNamespace = namespace ? [`${GRAY}${namespace}${RESET}`] : [];
  self.debug = self.log = (...args: unknown[]) => {
    if (enabled) console.debug(...formattedNamespace, DEBUG, ...args);
    return self;
  };
  self.info = (...args: unknown[]) => {
    if (enabled) console.info(...formattedNamespace, INFO, ...args);
    return self;
  };
  self.warn = (...args: unknown[]) => {
    if (enabled) console.warn(...formattedNamespace, WARN, ...args);
    return self;
  };
  self.error = (...args: unknown[]) => {
    if (enabled) console.error(...formattedNamespace, ERROR, ...args);
    return self;
  };
  return self;
}

export type Nanolog = ReturnType<typeof nanolog>;

export function enable() {
  enabled = true;
  return nanolog;
}

export function disable() {
  enabled = false;
  return nanolog;
}
