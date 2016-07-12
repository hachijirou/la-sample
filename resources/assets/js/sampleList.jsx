import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Button } from 'react-bootstrap';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/sampleListReducer';
import SampleListApp from './components/SampleListApp'

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

//store.dispatch(fetchSampleList());

/*
store.dispatch(getSampleList()).then(() =>
  console.log(store.getState())
);
*/


render(
  <Provider store={store}>
    <SampleListApp />
  </Provider>,
  document.getElementById('container')
)
