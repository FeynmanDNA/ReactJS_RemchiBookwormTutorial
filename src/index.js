import React from 'react';
import ReactDOM from 'react-dom';
// for react route
import { BrowserRouter } from 'react-router-dom';
// for semantic-ui css
import 'semantic-ui-css/semantic.min.css';
// for redux store and thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// for react and redux connection
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';

// create store from createStore function
// wrap applyMiddleware with composeWithDevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
