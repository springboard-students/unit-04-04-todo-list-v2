'use strict';

import {konz} from '../utils/constants.js';

export class Utils {
  static clog(bypass, fore, back, ...args) {
    if ( !konz.debugMode ){
      return;
    }
    if ( bypass ){
      console.log( args );
      return;
    }
    let msg = '';
    args.forEach(arg => msg += arg + ' ');
    console.log('%c ' + String(new Date().getTime()) + ' » ' + msg, 'background: ' + back + '; color: ' + fore);
    Utils.sleep(100);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static terminalColor(f, b) {
    const pre = '\e[';
    if (!f && !b) {
      return pre + '0m'; //reset
    }
    const fore = {
      reset  : 0,
      black  : 30,
      red    : 31,
      green  : 32,
      yellow : 33,
      blue   : 34,
      magenta: 35,
      cyan   : 36,
      white  : 37,
    };
    const back = {
      reset  : 0,
      black  : 40,
      red    : 41,
      green  : 42,
      yellow : 44,
      blue   : 44,
      magenta: 45,
      cyan   : 46,
      white  : 47,
    };
    let color  = '';
    if (!!f) {
      color += pre + fore[f] + 'm';
    }
    if (!!b) {
      color += pre + back[b] + 'm';
    }
    return color;
  }

  static sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

}
