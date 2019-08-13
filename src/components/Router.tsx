import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Apps from './Apps';
import Header from './Header';
import SafetyFactor from './safety-factor';
import * as routes from '../constants/routes';

const Router = () => (
  <div className="container-main">
    <div className="main-wrapper overflow-scroll" id="mainWrapperElement">
      <BrowserRouter>
        <Header />
        <div className="p-10">
          <Switch>
            <Route exact path={routes.HOME} component={Apps} />
            <Route exact path={routes.SAFETY_FACTOR} component={SafetyFactor} />
            <Route path="/" render={() => <Redirect to={routes.HOME} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </div>
);

export default Router;