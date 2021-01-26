import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import MrSushiStore from './store/mrsushi-store';

ReactDOM.render(
    <Provider store={MrSushiStore()}>
      <Routes/>
    </Provider>
  , document.getElementById('root')
);