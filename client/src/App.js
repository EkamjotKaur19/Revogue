import {useEffect, useState} from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  CircularProgress,
} from '@material-ui/core';

import {useDispatch, useSelector} from 'react-redux';


// Relative imports
import useStyles from './styles'
import NavBar from './components/NavBar/NavBar';
import ProductGridItem from './components/ProductGridItem/ProductGridItem';
import Footer from './components/Footer/Footer';

import {getProducts} from './actions/products'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.products);
  
  // TODO: change this to functionality
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      
      <Box className={classes.hero}>
        <Box>
          <Typography variant="h2">
            One stop for all your needs!
          </Typography>
        </Box>
      </Box>

      <Container maxWidth='lg' className={classes.itemsContainer}>
        <Typography variant="h4" className={classes.itemTitle}>
          Items
        </Typography>
      

        {!products.length ? (
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
          </div>) : (
          <Grid container spacing={3}> {
            
            products.map((product) => (
              <ProductGridItem key={product._id}
                productId={product._id}
                img={!product.image ? "https://picsum.photos/200/300" : product.image}
                title={product.name}
                avatar={!product.avatar ? 'https://i.pinimg.com/originals/5b/c6/e6/5bc6e6b23f963cb859ac7aa748029a78.png' : product.avatar}
                price={'₹' + product.price}
                desc={product.description}
              />
            ))
          }
          </Grid>
        )}

      </Container>

      <Footer />
    </div>
    
  );
}

export default App;
