'use strict';

import {ItemFactory} from '../patterns/item-factory.js';
import {Observable}  from '../patterns/observable.js';
import {konz}        from '../utils/constants.js';
import {Utils}       from '../utils/utils.js';

export class View
    extends Observable {

  constructor(list) {
    super(konz.names.view);
    this.list = list;
  }

  update(data) {
    const origin         = data.origin;
    this.data.occurrence = data.occurrence;
    // const payload        = data.payload;
    switch (origin) {
      case konz.names.init: {
        Utils.clog(false, 'magenta', '', 'View/update/Occurrence from init:', this.data.jnb());
        break;
      }
      case konz.names.storage: {
        Utils.clog(false, 'magenta', '', 'View/update/Occurrence from storage:', this.data.jnb());
        if (this.data.occurrence === konz.occurrences.itemsLoadedFromStorage) {
          Utils.clog(false, 'magenta', '', 'View/update/items loaded:', data.payload);
          Utils.clog(false, 'magenta', '', 'View/update/calling addLoadedItems()');
          this.addLoadedItems(data.payload);
          // Utils.clog(false, 'magenta', '', 'View/update/notifying observers');
          // this.data.occurrence = occurrence;
          // this.data.payload    = payload;
          // this.notify(this.data);
        }
        break;
      }
      case konz.names.list: {
        if (this.data.occurrence === konz.occurrences.removal.clicked) {
          Utils.clog(false, 'magenta', '', 'View/removal:', data.jnb());
          document.getElementById(data.payload[0]).remove();
          this.notify(data);
        } else if (this.data.occurrence === konz.occurrences.add.clicked){
          Utils.clog(false, 'magenta', '', 'View/add:', data.jnb());
          Utils.clog(false, 'magenta', '', 'View/adding new Item');
          // document.getElementById(data.payload[0]).remove();
          this.addNew();
          this.notify(data);
        }
        break;
      }
      default: {

      }

    }
  }

  addNew() {
    let new_item = new ItemFactory({
                                     edition   : {},
                                     completion: {},
                                     removal   : {},
                                   }).build();
    new_item.addObserver(this.list);
    konz.elems.list.append(new_item.getDomElem());
  }

  addLoadedItems(data) {
    Utils.clog(false, 'magenta', '', 'View/addLoadedItems/updating front-end');
    let item = {
      value: '',
    };
    data.forEach(name => {
      // item.value = name;
      // Utils.clog(false, 'magenta', '', 'View/addLoadedItems/adding item', name);
      // konz.elems.list.append(List.createItemElem(item));
    });

    // let new_item = new ItemFactory({
    //                              edition   : {value: 'Indo ainda mais longe...'},
    //                              completion: {},
    //                              removal   : {},
    //                            }).build();
    // new_item.addObserver(this.list);
    // konz.elems.list.append(new_item.getDomElem());
    // konz.elems.list.querySelectorAll('.text').forEach(text => {
    //   text.addEventListener( 'click', e => {
    //     console.log( e.target );
    //   });
    // });
    Utils.clog(false, 'magenta', '', 'View/addLoadedItems/completed');
  }
}
