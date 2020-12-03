import React from 'react'

import {useEffect, useState} from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Relative imports
import useStyles from './styles'
import ProductGridItem from '../ProductGridItem/ProductGridItem';
import {getProducts} from '../../actions/products';


export default function Products() {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(false);
  
  const dispatch = useDispatch(); 
  const products = useSelector((state) => state.products);
  
  // TODO: change this to functionality
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!currentId) {
    return (
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
                  currentId={currentId}
                  setCurrentId={setCurrentId}
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
    )
  }
  else {
    // console.log(`clicked! ${props.currentId}`);
    return(
      <Router>
        <Redirect to = {{pathname: `/products/${currentId}`}} />
      </Router>
    );
  }
}
