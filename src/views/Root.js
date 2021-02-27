import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import MainTemplate from '../templates/MainTemplate';
import reducers from '../store';
import { routes } from '../routes';

import LoginPage from './LoginPage';
import Creator from './Creator';
import Index from './Index';

const loggerMiddleware = createLogger();

const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Index} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.creator} component={Creator} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
