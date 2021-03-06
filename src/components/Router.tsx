import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Apps from './Apps';
import Header from './Header';
import SafetyFactor from './safety-factor';
import * as routes from '../constants/routes';

interface State {
  bodyHeight: number;
}

class Router extends React.Component<{}, State> {
  scrollbar: Scrollbars | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      bodyHeight: window.innerHeight
    };
  }

  componentDidMount() {
    this._setBodyHeight();
  }

  _setBodyHeight = () => {
    const titleBarElement = document.getElementById('titleBarElement');
    const titleBarElementHeight = titleBarElement ? titleBarElement.offsetHeight : 0;

    this.setState({ bodyHeight: window.innerHeight - titleBarElementHeight });
  };

  _scrollToBottom = () => {
    if (this.scrollbar) {
      this.scrollbar.scrollToBottom();
    }
  };

  render() {
    return (
      <div className="container-main">
        <div className="main-wrapper" id="mainWrapperElement">
          <BrowserRouter>
            <Header />
            <Scrollbars
              style={{ height: this.state.bodyHeight }}
              ref={scrollbar => {
                this.scrollbar = scrollbar;
              }}
            >
              <div className="p-10">
                <Switch>
                  <Route exact path={routes.HOME} component={Apps} />
                  <Route
                    exact
                    path={routes.SAFETY_FACTOR}
                    render={() => <SafetyFactor scrollToBottom={this._scrollToBottom} />}
                  />
                  <Route path="/" render={() => <Redirect to={routes.HOME} />} />
                </Switch>
              </div>
            </Scrollbars>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Router;
