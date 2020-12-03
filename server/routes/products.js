import express from 'express';

import {getProducts, createProduct, getProduct} from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);

export default router;
