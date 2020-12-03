import axios from 'axios';

const url = 'http://localhost:5000/products';

export const getProducts = () => axios.get(url);

export const getOneProduct = (id) => axios.get(`${url}/${id}`);