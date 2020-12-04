import * as api from '../api/index.js';

export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user);
    dispatch({type: 'CREATE_USER', payload: data});
  } catch (error) {
    console.log(error.message);
  }  
}

export const logIn = (userDetails) => async (dispatch) => {
    try {
        const {data} = await api.login(userDetails);
        dispatch({type: 'USER_LOGIN', payload: data});
        //console.log(data);
        //return data.success;
    } catch(error) {
        console.log(error.message);
    }
}