import {combineReducers} from 'redux'; 

import products from './products'
import users from './users';
import cart from './cart';


export default combineReducers({
  products: products,
  users: users,
  cart: cart,
});