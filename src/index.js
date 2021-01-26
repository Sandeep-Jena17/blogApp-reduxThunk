import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Home from './Components/Home';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store=createStore(reducers,applyMiddleware(thunk));
//console.log(store.getState());
console.log(store);
store.subscribe(()=>{console.log(store.getState());})
ReactDOM.render(
  <Provider store={store}>
      <Home />
  </Provider>,
  document.querySelector('#root')
)