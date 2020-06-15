'use strict';

import {Utils} from '../utils/utils.js';

export class Observable {
  data = {
    occurrence: '',
    payload   : '',
  };

  constructor(origin) {
    this.observers   = [];
    this.data.origin = origin;
  }

  addObserver(observer) {
    this.observers.push(observer);
    Utils.clog(false, 'orange', '', this.data.origin, 'is being observed by', observer.data.origin);
  }

  removeObserver(observer) {
    this.observers.remove(observer);
  }

  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => {
        Utils.clog(false, 'orange', '', observer.data.origin, 'Observer being notified by', this.data.origin, 'using' +
                                                                                                 ' this' +
                                                                                                 ' data:');
        Utils.clog(true, null, null, data.jnb());
        observer.update(data);
      });
    }
  }
}
