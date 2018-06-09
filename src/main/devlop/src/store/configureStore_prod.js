import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createHistory();

const routerMiddleWare = routerMiddleware(history);

export const configureStore = () => createStore(
  reducers,
  compose(
    applyMiddleware(thunk, routerMiddleWare),
  )
);