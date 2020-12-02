import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const {data} = await api.getProducts();
    dispatch({type: 'GET_ALL_PRODUCTS', payload: data});
  } catch (error) {
    console.log(error.message);
  }  
}