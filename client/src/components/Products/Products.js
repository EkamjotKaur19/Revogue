import React from 'react'

import {useEffect, useState} from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import {Redirect} from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import {BrowserRouter as Router, Switch} from 'react-router-dom';

// Relative imports
import useStyles from './styles'
import ProductGridItem from '../ProductGridItem/ProductGridItem';
import {getProducts} from '../../actions/products';


const Products = function () {
  const classes = useStyles();

  const [currentProduct, setCurrentProduct] = useState(null);
  
  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.products);
  
  // TODO: change this to functionality
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!currentProduct) {
    return (
      <>
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
                  product={product}
                  currentProduct={currentProduct}
                  setCurrentProduct={setCurrentProduct}
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
        </>
    )
  }
  else {
    // console.log(`clicked! ${props.currentId}`);
    return(
    
      <Redirect to = {{pathname: `/products/${currentProduct._id}`, state: { myCurrentProduct: currentProduct }}} />
      // <Redirect to = {`/products/${currentId}`} /> 
    );
  }
}


export default withRouter(Products);