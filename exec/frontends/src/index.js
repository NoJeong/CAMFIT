import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducers from './_reducers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

const theme = createMuiTheme({
  typography: {
    fontFamily: 'sandol',
  },
});


ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
