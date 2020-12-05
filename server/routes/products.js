import express from 'express';

import {getProducts, createProduct, getProduct, getProductbyCat} from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.get('/cat/:cat', getProductbyCat);

export default router;
