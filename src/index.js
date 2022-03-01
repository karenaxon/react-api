import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunkMiddleWare, middlewareLogger));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

