'use strict';

import {konz}       from '../utils/constants.js';
import {Observable} from '../patterns/observable.js';

export class Edition extends Observable {
  constructor() {
    super(konz.names.edition);
  }

  getEditionElem(value){
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
