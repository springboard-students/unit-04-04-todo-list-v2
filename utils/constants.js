'use strict';

export const konz = {
  context    : '/unit-04-04-todo-list-v2/',
  debugMode  : true,
  occurrences: {
    initCompleted         : 'init-completed',
    itemsLoadedFromStorage: 'items-loaded-from-storage',
    removal: {
      clicked: 'removal-clicked'
    },
  },
  names      : {
    init      : 'Init',
    storage   : 'Storage',
    view      : 'View',
    list      : 'List',
    add       : 'Add',
    edition   : 'Edition',
    completion: 'Completion',
    removal   : 'Removal',
    item      : 'Item',
  },
  elems      : {
    list: document.getElementById('list-div'),
  },
  symbols    : {
    done  : '\u2714',
    remove: '\u274C',
    reopen: '\u21BA',
  },
};
