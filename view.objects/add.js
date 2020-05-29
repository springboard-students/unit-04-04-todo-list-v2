'use strict';

import {Observable} from '../patterns/observable.js';
import {konz}       from '../utils/constants.js';
import {Utils}      from '../utils/utils.js';

export class Add
    extends Observable {
  constructor() {
    super(konz.names.add);
  }

  // update(data) {
  //   Utils.clog(false, 'lightblue', '', 'Add/update() from this data:');
  //   Utils.clog(true, null, null, data);
  //   // switch (data.origin) {
  //   //   case konz.names.view: {
  //   //     if (data.occurrence === konz.occurrences.itemsLoadedFromStorage) {
  //   //       this.data.occurrence = data.occurrence;
  //   //       this.data.payload = this.getItemElems( data.payload );
  //   //       this.notify( this.data );
  //   //     }
  //   //
  //   //   }
  //   // }
  // }

  // getItemElems( arr ){
  //   let elems = [];
  //   let elem;
  //   arr.forEach( item => {
  //     elem = '<div style="border: 1px solid blue; margin: 2px;">' + item + '</div>';
  //     elems.push( elem );
  //   });
  //   return elems;
  // }
}
