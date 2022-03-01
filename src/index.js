import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/headlines-reducer';
import thunkMiddleWare from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunkMiddleWare, middlewareLogger));

ReactDOM.render(
  <Provider store={ store }>
    <div className='container'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

