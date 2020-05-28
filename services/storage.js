'use strict';

import {Utils}      from '../utils/utils.js';
import {Observable} from '../patterns/observable.js';

export class Storage
    extends Observable {
  constructor() {
    super();
  }

  update(data) {
    const origin     = data.origin;
    const occurrence = data.occurrence;
    switch (origin) {
      case 'init': {
        Utils.clog('red', '', 'Storage/Occurrence from init:', occurrence);
        break;
      }
    }
  }
}
