import {
  Box,
  Typography,
} from '@material-ui/core';


import SignIn from './components/Login/SignIn';
import Checkout from './components/Checkout/Checkout';
import Review from './components/Checkout/Forms/Review';
import SignUp from './components/Login/SignUp';
import ProductItem from './components/ProductItem/ProductItem'
import Cart from './components/Cart/Cart';

// Relative imports
import useStyles from './styles'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ProductsByCat from './components/Products/ProductsByCat';
import ScrollToTop from './ScrollToTop';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// added by Vedant
import React from 'react';
import { useGlobalContext } from './components/Cart/context';
import CartContainer from './components/Cart/CartContainer'; 


function App() {
  // const classes = useStyles();
  
  sessionStorage.setItem('cart', '[]');

  const { state: { loading }, } = useGlobalContext();

  if (loading)
  {
    return(
      <div className='loading'>
      <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Route exact path = "/login" component = {SignIn} />
          <Route exact path = "/checkout" component = {Checkout} />
          <Route exact path="/signup" component={SignUp} />
          {/* added */}
          <Route exact path = "/cart" component = {CartContainer} />  
          <Route exact path='/' component={Products} />
          <Route path = "/products/:id" render={(props) => <ProductItem {...props}/>} />
          <Route path = "/products/cat/:cat" render={(props) => <ProductsByCat {...props} />}/>
          <Route exact path = "/cart" component = {Cart} />
        </ScrollToTop>
        {/* <Route path = "/products/:id" component = {ProductItem} /> */}
      </Router>     
      {/* <Products /> */}
      <Footer />

      {/* Added from here */}

      {/* Added by vedant */}
      <CartContainer />

      );

    </div>
    
  );
}

export default App;
