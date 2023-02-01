import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Component from './Component';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
  step: 1
}

function rerucer (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + state.step
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - state.step
      }
    }
    case 'STEP_CHANGE': {
      const {value} = action;
      return {
        ...state,
        step: value
      }
    }
    default: {
      return state
    }
  }
}

const store = createStore(rerucer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Component />
  </Provider>
);


