import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configureStore from './store';


import { fetchMemes } from './actions';

const store = configureStore();
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
