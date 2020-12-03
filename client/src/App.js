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

import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  const classes = useStyles();
  

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path = "/login" component = {SignIn} />
        <Route exact path = "/checkout" component = {Checkout} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route path = "/products/:id" component = {ProductItem} />
      </Router>
      
      <Box className={classes.hero}>
        <Box>
          <Typography variant="h2">
            One stop for all your needs!
          </Typography>
        </Box>
      </Box>

      <Products />

      <Footer />
    </div>
    
  );
}

export default App;
