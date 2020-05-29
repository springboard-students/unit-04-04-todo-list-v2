'use strict';

import {Add}        from '../view.objects/add.js';
import {Observable} from '../patterns/observable.js';
import {konz}       from '../utils/constants.js';
import {Utils}      from '../utils/utils.js';
import {List}       from '../view.objects/list.js';
import {Storage}    from './storage.js';
import {View}       from './view.js';

class Init
    extends Observable {

  constructor() {
    super(konz.names.init);
    Utils.clog(false, 'yellow', '', 'Init/creating view objects');
    this.storage = new Storage();
    this.view    = new View();
    this.list    = new List();
    this.add     = new Add();
    //
    this.init();
    //
    Utils.clog(false, 'yellow', '', 'Init/Notifying Observers');
    this.data.occurrence = konz.occurrences.initCompleted;
    this.notify(this.data);
    Utils.clog(false, 'yellow', 'red', ' Init/Initiated ');
  }

  init() {
    Utils.clog(false, 'yellow', '', 'Init/init()/creating observing chain');
    this.addObserver(this.view);   // This must be first
    this.addObserver(this.storage);
    this.storage.addObserver(this.view);
    this.list.addObserver(this.storage);
    this.list.addObserver(this.view);
    // this.view.addObserver(this.add);
    this.add.addObserver(this.list);
  }
}
new Init();
