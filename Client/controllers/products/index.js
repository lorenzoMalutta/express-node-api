const Product = require('../../models/Product');
const { randomUUID } = require('crypto');

// index
async function index(req, res) {
  const products = await Product.find();
  return res.json(products);
};

// create
async function create(req, res) {
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
};

// show
async function show(req, res) {
  const { id } = req.params;
  const product = await Product.findById(id);

  return res.send(product);
};

// update
async function update(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = await Product.findByIdAndUpdate(id, {
    name,
    price
  });

  return res.json(product);
};

// destroy
async function destroy(req, res) {
  const { id } = req.params;

  const product = await Product.findByIdAndDelete(id);

  return res.json(product);
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};
