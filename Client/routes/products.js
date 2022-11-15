const router = require('express').Router();
const Product = require('../models/Product');
const { randomUUID } = require('crypto');

// index
router.get('/', async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

// create
router.post('/', async (req, res) => {
  const { name, price } = req.body;

  const product = { id: randomUUID(), name, price };

  try {
    // save product
    await Product.create(product);
    res.status(201).send('Product created');
  } catch (error) {
    console.log(error);
  }

  return res.json(product);
});

// show
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  return res.send(product);
});

// update
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = await Product.findByIdAndUpdate(id, {
    name,
    price
  });

  return res.json(product);
});

// delete
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  return res.json(product);
});