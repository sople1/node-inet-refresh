'use strict';
/**
 * node wininet.dll refresh Internet Setting for proxy
 * using ffi, wininet.dll
 *
 * you may can use InternetSetOptionA rather then InternetSetOptionW
 *
 * @author SnooeyNET <sople1@snooey.net>
 */

const INTERNET_OPTION_REFRESH = 37
const INTERNET_OPTION_SETTINGS_CHANGED = 39

const ffi = require('ffi');

let inet = ffi.Library('wininet', {
    'InternetSetOptionW': ["bool", ['int', 'int', 'int', 'int']]
});
inet.InternetSetOptionW(0, INTERNET_OPTION_REFRESH, 0, 0);            // InternetSetOption(0, INTERNET_OPTION_REFRESH, IntPtr.Zero, 0);
inet.InternetSetOptionW(0, INTERNET_OPTION_SETTINGS_CHANGED, 0, 0);   // InternetSetOption(0, INTERNET_OPTION_SETTINGS_CHANGED, IntPtr.Zero, 0);