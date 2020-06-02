'use strict';

import {konz}       from '../utils/constants.js';
import {Completion} from '../view.objects/item/completion.js';
import {Edition}    from '../view.objects/item/edition.js';
import {Item}       from '../view.objects/item/item.js';
import {Removal}    from '../view.objects/item/removal.js';

export class ItemFactory {
  partNames = ['edition', 'completion', 'removal'];

  constructor(props) {
    this.props = props;
  }

  build() {
    const newItem = new Item();
    const item    = document.createElement('div');
    item.classList.add('item');
    item.setAttribute('id', String(Math.random()).substring(2));
    //
    let part;
    this.partNames.forEach(partName => {
      part = new ItemPartFactory(partName, this.props[partName]).build();
      item.append(part.getDomElem());
      part.addObserver(newItem);
    });
    //
    newItem.setDomElem(item);
    return newItem;
  }
}

class ItemPartFactory {
  parts = {
    edition   : EditionFactory,
    completion: CompletionFactory,
    removal   : RemovalFactory,
  };

  constructor(type, props) {
    this.type  = type;
    this.props = props;
  }

  build() {
    return new this.parts[this.type](this.props).build();
  }
}

class EditionFactory {
  constructor(props) {
    this.props = props;
  }

  build() {
    const texta = document.createElement('textarea');
    texta.classList.add('text');
    texta.value = this.props.value;
    return new Edition(texta);
  }

}

class CompletionFactory {
  constructor(props) {
    this.props = props;
  }

  build() {
    const done = document.createElement('div');
    done.classList.add('option', 'done');
    const doneOptionContent = document.createElement('span');
    doneOptionContent.classList.add('option-content', 'disable-selection');
    doneOptionContent.innerHTML = konz.symbols.done;
    done.append(doneOptionContent);
    return new Completion(done);
  }

}

class RemovalFactory {
  constructor(props) {
    this.props = props;
  }

  build() {
    const remove = document.createElement('div');
    remove.classList.add('option', 'remove');
    const removeOptionContent = document.createElement('span');
    removeOptionContent.classList.add('option-content', 'disable-selection');
    removeOptionContent.innerHTML = konz.symbols.remove;
    remove.append(removeOptionContent);
    return new Removal(remove);
  }
}
