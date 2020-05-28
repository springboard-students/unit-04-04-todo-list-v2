'use strict';

import {Utils}      from '../utils/utils.js';
import {Observable} from '../patterns/observable.js';

export class View
    extends Observable {
  constructor() {
    super();
  }

  update(data) {
    const origin     = data.origin;
    const occurrence = data.occurrence;
    switch (origin) {
      case 'init': {
        Utils.clog('blue', '', 'View/Occurrence from init:', occurrence);
        break;
      }
    }
  }
}
