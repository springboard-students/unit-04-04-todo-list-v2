'use strict';

import {Observable} from '../../patterns/observable.js';
import {konz}       from '../../utils/constants.js';

export class Completion
    extends Observable {
  constructor(domElem) {
    super(konz.names.completion);
    this.domElem = domElem;
    this.domElem.addEventListener('click', e => {
      console.log('clicked: notify item!!!');
    });
  }

  getDomElem() {
    return this.domElem;
  }
}
