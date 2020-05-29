'use strict';

import {konz}       from '../utils/constants.js';
import {Observable} from '../patterns/observable.js';

export class List
    extends Observable {

  constructor() {
    super(konz.names.list);
  }

  update( data ){
    switch ( data.origin ){
      case konz.names.add: {
        this.data.occurrence = data.occurrence;
        this.data.payload = data.payload;
        this.notify( this.data );
      }
    }
  }
}
