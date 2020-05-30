'use strict';

import {Observable} from '../../patterns/observable.js';
import {konz}       from '../../utils/constants.js';

export class Edition
    extends Observable {
  constructor(domElem) {
    super(konz.names.edition);
    this.domElem = domElem;
    this.domElem.addEventListener('change', e => {
      console.log('changed: notify storage');
    });
    this.domElem.addEventListener('click', e => {
      console.log('clicked: notify item!!!');
    });
  }

  getDomElem() {
    return this.domElem;
  }

  getEditionElem(value) {
    // const textContainer = document.createElement('div');
    const text = document.createElement('textarea');
    text.classList.add('text');
    // text.setAttribute('disabled', 'true');
    text.value = value;
    // textContainer.append(text);
    // textContainer.classList.add('bordered');
    // textContainer.addEventListener( 'click', e => {
    //   console.log( e.target );
    //   if ( text.hasAttribute('disabled') ){
    //     text.removeAttribute('disabled')
    //     text.classList.add('is-editing');
    //     text.focus();
    //   } else {
    //     text.setAttribute('disabled', 'true');
    //     text.classList.remove('is-editing');
    //   }
    // });
    text.addEventListener('change', e => {
      console.log('changed: notify item/storage');
    });
    return text;
  }
}
