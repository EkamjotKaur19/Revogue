import axios from 'axios';

// const host = 'http://localhost:5000/'
const host = 'https://thrift-shop-wt.herokuapp.com';

const product_url = host + 'products';
const user_url = host + 'users/register';
const login_url = host + 'users/login';


export const getProducts = () => axios.get(product_url);
export const getOneProduct = (id) => axios.get(`${product_url}/${id}`);
export const getProductsByCat = (category) => axios.get(`${product_url}/cat/${category}`);
export const addProduct = (newProduct) => axios.post(product_url, newProduct); 

export const createUser = (newUser) => axios.post(user_url, newUser);

export const login = (userDetails) => axios.post(login_url, userDetails);
