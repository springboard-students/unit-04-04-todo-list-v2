'use strict';

import {Utils}      from '../utils/utils.js';
import {Observable} from '../patterns/observable.js';
import {Storage}    from './storage.js';
import {View}       from './view.js';

class Init
    extends Observable {
  constructor() {
    super();
    this.init();
    this.data.origin     = 'init';
    this.data.occurrence = 'initiated';
    this.notify(this.data);
  }

  init() {
    const storage = new Storage();
    const view    = new View();
    this.addObserver(storage);
    this.addObserver(view);
    Utils.clog('yellow', 'red', ' Init/Initiated ');
  }
}

new Init();
