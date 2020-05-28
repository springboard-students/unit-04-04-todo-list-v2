"use strict";

export class Observable {
  constructor() {
    this.observers = [];
  }

  data = {
    origin: '',
    occurrence: '',
    payload: ''
  };

  addObserver(voyeur) {
    this.observers.push(voyeur);
  }

  removeObserver(voyeur) {
    this.observers.remove(voyeur);
  }

  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}
