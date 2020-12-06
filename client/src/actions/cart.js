import * as api from '../api/index.js';

export const addItemCart = (product) => async (dispatch) => {
  try {
    // const {data} = await api.getOneProduct(id);
    dispatch({type: 'ADD_ITEM', payload: product});
  } catch (error) {
    console.log(error.message);
  }
}

export const getItemsCart = () => async (dispatch) => {
  try {
    // const {data} = await api.getOneProduct(id);
    dispatch({type: 'GET_ALL_ITEMS', payload: []});
  } catch (error) {
    console.log(error.message);
  }
}