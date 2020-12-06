import React from 'react'
import {
  Button,
  Typography,
} from '@material-ui/core';

import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {addItemCart, getItemsCart} from '../../actions/cart';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); 
  // const product = useSelector((state) => state.products);

  console.log(cartItems);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   // dispatch(addItemCart())
  //   console.log(cartItems);
  //   // console.log(product);
  // }

  useEffect(() => {
    dispatch(getItemsCart());
    console.log(cartItems);
  }, []);

  return (
    <>
      <Typography component={'span'}>
        {cartItems.length ? (
          <Typography>
            {cartItems.map((cartItem) => {
              <Typography>
                {cartItem.name + ' $' + cartItem.price}
              </Typography>
            })}
          </Typography>
        ) : (
          <Typography component={'span'}>
            No items
          </Typography>
        )}
      </Typography>
      {/* <Button onClick={handleClick}>
          Add Item
      </Button> */}
    </>
  )
}

export default withRouter(Cart);