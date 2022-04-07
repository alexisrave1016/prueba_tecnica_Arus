import React from 'react';
import ReactDOM from 'react-dom';
import './styles/card.css'
import './styles/app.css'
import './styles/navBar.css'
import './styles/login.css'
import './styles/registro.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AppRouters from './routers/AppRouters';
import { Provider } from 'react-redux';
import { store } from './store/store';




ReactDOM.render(
  <Provider store={store}>
    <AppRouters/>
  </Provider>,
  document.getElementById('root')
);


