import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Button } from 'react-bootstrap';

// Action Creators
function incrementCounter() {
  return { type: 'INCREMENT_COUNTER' }
}

function decrementCounter() {
  return { type: 'DECREMENT_COUNTER' }
}

// Reducer
function counter(state = {counter: 0}, action) {
  switch(action.type) {
  case 'INCREMENT_COUNTER':
    return {counter: state.counter + 1}
  case 'DECREMENT_COUNTER':
    return {counter: state.counter - 1}
  default:
    return state
  }
}

// React Component
let App = ({counter, dispatch}) => (
  <div>
    <div>{counter}</div>
    <Button bsStyle="primary" bsSize="large" onClick={() =>
      dispatch(incrementCounter())}>+</Button>
    <Button bsStyle="primary" bsSize="large" onClick={() =>
      dispatch(decrementCounter())}>-</Button>
  </div>
)

function mapStateToProps(state) {
  return {counter: state.counter}
}
App = connect(mapStateToProps)(App)

const store = createStore(counter, {counter: 0})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
