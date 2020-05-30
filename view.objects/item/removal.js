'use strict';

import {konz}       from '../../utils/constants.js';
import {Observable} from '../../patterns/observable.js';

export class Removal extends Observable{
  constructor(domElem) {
    super(konz.names.removal);
    this.domElem = domElem;
    this.domElem.addEventListener('click', e => {
      this.data.occurrence = konz.occurrences.removal.clicked;
      this.notify( this.data );
    });
  }

  getDomElem(){
    return this.domElem;
  }
}
