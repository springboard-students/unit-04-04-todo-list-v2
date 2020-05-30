'use strict';

import {Utils}      from '../../utils/utils.js';
import {Observable} from '../../patterns/observable.js';
import {konz}       from '../../utils/constants.js';

export class Item
    extends Observable {
  constructor() {
    super(konz.names.item);
    this.addObserver(konz.)
    // this.domElem = domElem;
    // this.initEdition( edition );
    // this.completion = completion;
    // this.removal = removal;
  }

  getDomElem() {
    return this.domElem;
  }

  setDomElem(domElem) {
    this.domElem = domElem;
  }

  update(data) {
      switch( data.origin ){
        case konz.names.removal: {
          Utils.clog(false, 'cyan', '', 'Item/notified by Removal with this data:');
          Utils.clog( true, null, null, data );
        }
      }
  }
}
