import { legacy_createStore as createStore } from 'redux';

// configure aqui sua store

const store = createStore();

if (window.Cypress) {
  window.store = store;
}
