'use strict';
/**
 * node wininet.dll refresh Internet Setting for proxy
 * using ffi, wininet.dll
 *
 * you may can use InternetSetOptionA instead of InternetSetOptionW
 *
 * @author SnooeyNET <sople1@snooey.net>
 */
const ffi = require('ffi-napi');

const opt = {
    INTERNET_OPTION_REFRESH: 37,
    INTERNET_OPTION_SETTINGS_CHANGED: 39
};

let inet = ffi.Library('wininet', {
    'InternetSetOptionW': ["bool", ['int', 'int', 'int', 'int']]
});

function main() {
    inet.InternetSetOptionW(0, opt.INTERNET_OPTION_REFRESH, 0, 0);            // InternetSetOption(0, INTERNET_OPTION_REFRESH, IntPtr.Zero, 0);
    inet.InternetSetOptionW(0, opt.INTERNET_OPTION_SETTINGS_CHANGED, 0, 0);   // InternetSetOption(0, INTERNET_OPTION_SETTINGS_CHANGED, IntPtr.Zero, 0);
    console.log("InternetSetOption refresh launched.");
}

if (typeof require != 'undefined' && require.main === module) {
    main();
}


module.exports = {
    run: () => main()
};
