import React from 'react'
import {
  Typography,
} from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import {useEffect} from 'react';

function Cart() {
  let cartstring = sessionStorage.getItem('cart')
  let cartItems = JSON.parse(cartstring);

  console.log(cartstring);

  useEffect(() => {
    // dispatch(getItemsCart());
    console.log(cartItems);
  }, []);

  return (
    <>
      <Typography component={'span'}>
        {cartItems.length ? (
          <Typography>
            {cartItems.map((cartItem) => {
              <Typography>
                {cartItem.name + ' ₹' + cartItem.price}
              </Typography>
            })}
          </Typography>
        ) : (
          <Typography component={'span'}>
            No items
          </Typography>
        )}
      </Typography>
    </>
  )
}

export default withRouter(Cart);