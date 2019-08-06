import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import Icons from './common/Icons';
import * as routes from '../constants/routes';

const routeToNameMap = {
  [routes.HOME]: 'Civil Calculator',
  [routes.SAFETY_FACTOR]: 'Safety factor'
};

const Header = (props: RouteComponentProps<{}>) => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>{routeToNameMap[window.location.pathname || routes.HOME]}</Navbar.Brand>
    <Nav className="mr-auto" />
    {props.location.pathname !== '/' && (
      <Link to="/">
        <Icons name="back" />
      </Link>
    )}
  </Navbar>
);

export default withRouter(Header);
