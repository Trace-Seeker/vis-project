import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory();

const routerMiddleWare = routerMiddleware(history);

export const configureStore = () => createStore(
  reducers,
  compose(
    applyMiddleware(thunk, routerMiddleWare, createLogger()),
    DevTools.instrument()
  )
);