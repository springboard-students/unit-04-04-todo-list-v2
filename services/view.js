'use strict';

import {Observable} from '../patterns/observable.js';
import {konz}       from '../utils/constants.js';
import {Utils}      from '../utils/utils.js';
import {Item}       from '../view.objects/item.js';

export class View
    extends Observable {

  constructor() {
    super(konz.names.view);
  }

  update(data) {
    const origin     = data.origin;
    const occurrence = data.occurrence;
    const payload    = data.payload;
    switch (origin) {
      case konz.names.init: {
        Utils.clog(false, 'magenta', '', 'View/update/Occurrence from init:', occurrence);
        break;
      }
      case konz.names.storage: {
        Utils.clog(false, 'magenta', '', 'View/update/Occurrence from storage:', occurrence);
        if (occurrence === konz.occurrences.itemsLoadedFromStorage) {
          Utils.clog(false, 'magenta', '', 'View/update/items loaded:', payload);
          Utils.clog(false, 'magenta', '', 'View/update/calling addLoadedItems()');
          this.addLoadedItems(data.payload);
          // Utils.clog(false, 'magenta', '', 'View/update/notifying observers');
          // this.data.occurrence = occurrence;
          // this.data.payload    = payload;
          // this.notify(this.data);
          break;
        }
      }
    }
  }

  addLoadedItems(data) {
    Utils.clog(false, 'magenta', '', 'View/addLoadedItems/updating front-end');
    let item = {
      value: '',
    };
    data.forEach(name => {
      item.value = name;
      Utils.clog(false, 'magenta', '', 'View/addLoadedItems/adding item', name);
      konz.elems.list.append(Item.getItemElem(item));
    });
    // konz.elems.list.querySelectorAll('.text').forEach(text => {
    //   text.addEventListener( 'click', e => {
    //     console.log( e.target );
    //   });
    // });
      Utils.clog(false, 'magenta', '', 'View/addLoadedItems/completed');
  }
}
