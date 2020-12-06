import axios from 'axios';

const product_url = 'http://localhost:5000/products';
const user_url = 'http://localhost:5000/users/register';
const login_url = 'http://localhost:5000/users/login';


export const getProducts = () => axios.get(product_url);
export const getOneProduct = (id) => axios.get(`${product_url}/${id}`);
export const getProductsByCat = (category) => axios.get(`${product_url}/cat/${category}`);
export const addProduct = (newProduct) => axios.post(product_url, newProduct); 

export const createUser = (newUser) => axios.post(user_url, newUser);

export const login = (userDetails) => axios.post(login_url, userDetails);
