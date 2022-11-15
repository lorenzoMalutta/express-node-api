const { Router } = require('express');
const router = Router();

const PersonController = require('../controllers/person');
const ProductController = require('../controllers/products');

const Person = require('../models/Person');
const Product = require('../models/Product');

// Person routes
router.get('/person', PersonController.index);
router.post('/person', PersonController.create);
router.get('/person/:id', PersonController.show);
router.put('/person/:id', PersonController.update);
router.delete('/person/:id', PersonController.destroy);

// Product routes
router.get('/product', ProductController.index);
router.post('/product', ProductController.create);
router.get('/product/:id', ProductController.show);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.destroy);

module.exports = router;
