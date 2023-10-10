const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts)
.get('/productById/:id', productController.getProductById)
.post('/add', productController.addProduct)
.patch('/updateInfoByPatch/:id', productController.partialUpdate)
.put('/updateInfo/:id', productController.updateByReplace)
.delete('/deleteById/:id', productController.deleteProduct)

exports.router = router