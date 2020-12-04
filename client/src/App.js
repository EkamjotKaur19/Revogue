import {
  Box,
  Typography,
} from '@material-ui/core';


import SignIn from './components/Login/SignIn';
import Checkout from './components/Checkout/Checkout';
import Review from './components/Checkout/Forms/Review';
import SignUp from './components/Login/SignUp';
import ProductItem from './components/ProductItem/ProductItem'

// Relative imports
import useStyles from './styles'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';

import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';


function App() {
  const classes = useStyles();
  

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path = "/login" component = {SignIn} />
        <Route exact path = "/checkout" component = {Checkout} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route exact path='/' component={Products} />
        <Route path = "/products/:id" render={(props) => <ProductItem {...props}/>} />
        
        {/* <Route path = "/products/:id" component = {ProductItem} /> */}
      
      
      </Router>
      
      
      

      {/* <Products /> */}

      <Footer />

    </div>
    
  );
}

export default App;
