import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import reducers from './reducers';

// Components
import App from './components/App';

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
