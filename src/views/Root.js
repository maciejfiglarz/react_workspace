import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import MainTemplate from '../templates/MainTemplate';
import LoginPage from './LoginPage';
import reducers from '../store';

const loggerMiddleware = createLogger();

const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
