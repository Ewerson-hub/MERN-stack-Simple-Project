import express from 'express';
import {getProducts, createProduct, updateProduct, deleteProduct} from "../controllers/product.controller.js"

const router = express.Router();

router.post('/', createProduct)

router.get('/', getProducts)

router.delete('/:id', deleteProduct)

router.put('/:id', updateProduct)

export default router