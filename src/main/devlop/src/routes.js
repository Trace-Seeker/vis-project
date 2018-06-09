import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import asyncComonent from './containers/AsyncComponent';
import Main from './containers/Main/Main';
import Search from './containers/Search/Search';
import Find from './containers/Find/Find';
import Help from './containers/Help/Help';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import SearchRule from './containers/SearchRule/SearchRule';
import NoMatch from './containers/NoMatch/NoMatch';
import Module from './containers/Module/Module';

import URL from './link';


const AsyncSituation = asyncComonent(() => import('./containers/Situation/Situation'));

const routes = ({history}) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path={URL.Index} exact component={Main} />
      <Route path="/index" component={Main} />
      <Route path={URL.ShiChuang} component={Search} />
      <Route path={URL.HighSearch} component={Find} />
      <Route path={URL.Help} component={Help} />
      <Route path={URL.About} component={About} />
      <Route path={URL.Situation} component={AsyncSituation} />
      <Route path={URL.Module} component={Module} />
      <Route path={URL.SearchRule} component={SearchRule} />
      <Route path={URL.Login} component={Login} />
      <Route component={NoMatch}/>
    </Switch>
  </ConnectedRouter>
)

export default routes