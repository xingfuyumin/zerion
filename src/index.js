import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './pages/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { changeTheme } from './utils/theme/theme';

const store = createStore(reducers);
changeTheme();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
