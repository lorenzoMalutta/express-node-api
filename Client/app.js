// start config
const express = require('express');
const app = express();
app.use(express.json());
const { randomUUID } = require('crypto');

// end config

// start database

const products = [];

// end database

// start routes

app.get('/', (req, res) => {
  return res.send('Home da página');
}, (err) => {
  console.log(err);
});

app.get('/products', (req, res) => {
  return res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  const product = { id: randomUUID(), name, price };

  products.push(product);

  return res.json(product);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product.id === id);

  return res.json(product);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;

  const { name, price } = req.body;

  const productIndex = products.findIndex(product => product.id === id);

  products[productIndex] = {
    ...products[productIndex],
    name,
    price
  };

  return message = 'Produto atualizado com sucesso';
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex(product => product.id === id);

  products.splice(productIndex, 1);

  return message = 'Produto deletado com sucesso';

});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// end routes