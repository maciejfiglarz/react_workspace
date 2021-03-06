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
import ProductsList from './ProductsList';
import SinglePost from "./SinglePost.tsx";

const loggerMiddleware = createLogger();



  // // const [categories, setCategories] = useState<any>([]);
  // const getCategories = async () => {
  //   const data = await productServices.fetchAllCategories();
  //   setCategories(data);
  // }
  // useEffect(() => {
  //   getCategories();
  // }, []);



// const initialState = {
//   productCategories: ['electronics','jewelery','men clothing','women clothing']
// }


const store = createStore(reducers,  applyMiddleware(thunkMiddleware, loggerMiddleware));
console.log('store', store);
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Index} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.creator} component={Creator} />
          <Route path={routes.productsList} component={ProductsList} />
          <Route path={routes.singlePost} component={SinglePost} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
