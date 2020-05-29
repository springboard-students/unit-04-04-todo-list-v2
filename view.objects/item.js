'use strict';

import {Edition}    from './edition.js';
import {konz}       from '../utils/constants.js';
import {Observable} from '../patterns/observable.js';

export class Item
    extends Observable {
  constructor() {
    super();
  }

  static getItemElem = function(data) {
    const item = document.createElement('div');
    item.classList.add('item');

    // const text = document.createElement('textarea');
    // text.classList.add('text');
    // text.setAttribute('disabled', 'true');
    // text.value = data.value

    const texta = new Edition().getEditionElem(data.value);

    const options = document.createElement('div');
    options.classList.add('options');

    const done = document.createElement('div');
    done.classList.add('option', 'done');

    const remove = document.createElement('div');
    remove.classList.add('option', 'remove');

    const doneOptionContent = document.createElement('span');
    doneOptionContent.classList.add('option-content', 'disable-selection');
    doneOptionContent.innerHTML = konz.symbols.done;

    const removeOptionContent = document.createElement('span');
    removeOptionContent.classList.add('option-content', 'disable-selection');
    removeOptionContent.innerHTML = konz.symbols.remove;
    //
    done.appendChild(doneOptionContent);
    remove.appendChild(removeOptionContent);
    options.appendChild(done);
    options.appendChild(remove);
    item.append(texta);
    item.appendChild(options);
    //
    item.addEventListener('click', e => {
      console.log('item clicked', e );
    });
    //
    return item;
  };
}
