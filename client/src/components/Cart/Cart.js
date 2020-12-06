import React from 'react'
import {
  Button,
  Typography,
} from '@material-ui/core';

import {useDispatch, useSelector} from 'react-redux';
import {addItemCart} from '../../actions/cart';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); 
  const product = useSelector((state) => state.products);

  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(addItemCart())
    console.log(cartItems);
    console.log(product);
  }

  return (
    <>
      <Typography>
        {!cartItems.length ? (
          <Typography>
            {cartItems.map((cartItem) => {
              <Typography>
                {cartItem.name + ' $' + cartItem.price}
              </Typography>
            })}
          </Typography>
        ) : (
          <Typography>
            No items
          </Typography>
        )}
      </Typography>
      <Button onClick={handleClick}>
          Add Item
      </Button>
    </>
  )
}
