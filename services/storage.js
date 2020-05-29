'use strict';

import {Observable} from '../patterns/observable.js';
import {konz}       from '../utils/constants.js';
import {Utils}      from '../utils/utils.js';

export class Storage
    extends Observable {

  constructor() {
    super(konz.names.storage);
  }

  update(data) {
    const origin     = data.origin;
    const occurrence = data.occurrence;
    switch (origin) {
      case konz.names.init: {
        Utils.clog(false, 'red', '', 'Storage/Occurrence from init:', occurrence);
        Utils.clog(false, 'red', '', 'Storage/Loading saved items');
        Utils.clog(false, 'red', '', 'Storage/Notifying observers');
        this.data.occurrence = konz.occurrences.itemsLoadedFromStorage;
        this.data.payload    = ['itemA', 'itemB', 'itemC'];
        this.notify(this.data);
        break;
      }
    }
  }
}
