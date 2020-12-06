import * as api from '../api/index.js';

export const addItemCart = (id) => async (dispatch) => {
  try {
    const {data} = await api.getOneProduct(id);
    dispatch({type: 'ADD_ITEM', payload: data});
  } catch (error) {
    console.log(error.message);
  }
}
