import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import Icons from './common/Icons';
import * as routes from '../constants/routes';

const routeToNameMap = {
  [routes.HOME]: 'Civil Calculator',
  [routes.SAFETY_FACTOR]: 'Safety factor'
};

const Header = (props: RouteComponentProps<{}>) => {
  const currentPath = props.location.pathname.replace(/\/$/, '');

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>{routeToNameMap[currentPath]}</Navbar.Brand>
      <Nav className="mr-auto" />
      {currentPath !== routes.HOME && (
        <Link to="/">
          <Icons name="back" />
        </Link>
      )}
    </Navbar>
  );
};

export default withRouter(Header);
