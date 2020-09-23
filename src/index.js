import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,  applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();

// use context for local and global state

export const store = createStore(reducer, 
  applyMiddleware(thunk)
  );
// console.log(store.getState())

export const URL = 'https://secure-shelf-48338.herokuapp.com/'
// export const URL ='http://localhost:3001'


ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* {console.log(store)} */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
