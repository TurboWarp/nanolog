# @turbowarp/nanolog

`minilog` replacement for TurboWarp.

 - Extremely small: less than 1KB, no dependencies
 - Does not use leading-zero octal literals (syntax error in strict mode)
 - Does not interact with local storage, cookies, etc. (minilog does)
 - Uses the default log styles from your browser; doesn't try to be smart
