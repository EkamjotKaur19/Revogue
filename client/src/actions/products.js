import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const {data} = await api.getProducts();
    dispatch({type: 'GET_ALL_PRODUCTS', payload: data});
  } catch (error) {
    console.log(error.message);
  }  
}

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const {data} = await api.getOneProduct(id);
    dispatch({type: 'GET_ONE_PRODUCT', payload: data});
  } catch (error) {
    console.log(error.message);
  }
}