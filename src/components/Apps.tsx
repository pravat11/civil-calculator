import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Apps = () => {
  return (
    <div className="p-10">
      <Link to={routes.SAFETY_FACTOR}>
        <Button variant="secondary" size="lg" block>
          Calculate safety factor
        </Button>
      </Link>
    </div>
  );
};

export default Apps;
