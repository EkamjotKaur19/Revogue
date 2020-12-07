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
import AddProductForm from './components/AddProductForm/AddProductForm';

import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';


function App() {
  const classes = useStyles();
  
  //sessionStorage.setItem('cart', '[]');

  return (
    <div className="App">
      <Router>
        <NavBar />
        <ScrollToTop>
          <Route exact path = "/login" component = {SignIn} />
          <Route exact path = "/checkout" component = {Checkout} />
          <Route exact path = "/signup" component = {SignUp} />
          <Route exact path='/' component={Products} />
          <Route path = "/products/:id" render={(props) => <ProductItem {...props}/>} />
          <Route path = "/products/cat/:cat" render={(props) => <ProductsByCat {...props} />}/>
          <Route exact path = "/cart" component = {Cart} />
          <Route exact path = "/add-product" component = {AddProductForm} />
        </ScrollToTop>
        
        {/* <Route path = "/products/:id" component = {ProductItem} /> */}
      
      
      </Router>
      
      
      

      {/* <Products /> */}

      <Footer />

    </div>
    
  );
}

export default App;
