import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import { configureStore, history } from './store/configureStore';
import './index.css';

const store = configureStore();

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div id="app">
      <Routes history={history}/>
    </div>
  </Provider>
)

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('root'));
