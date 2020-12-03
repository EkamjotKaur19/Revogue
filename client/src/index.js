import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import theme from './theme'; 
import reducers from './reducers';

import App from './App';

import AddressForm from './components/Checkout/Forms/AddressForm';
import Checkout from './components/Checkout/Checkout';
import PaymentForm from './components/Checkout/Forms/PaymentForm';
import Review from './components/Checkout/Forms/Review';

// import SignIn from './components/Login/SignIn';
// import SignUp from './components/Login/SignUp';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(<SignIn/>, document.getElementById('root'));
ReactDOM.render(
  
  <ThemeProvider theme={theme}>
    <Provider store={store}>
    {/* <App/> */}
    <Checkout />
    </Provider> 
  </ThemeProvider>,

  document.getElementById('root')
);