// start config
const express = require('express');
const app = express();
app.use(express.json());
const { randomUUID } = require('crypto');
const mongoose = require('mongoose');
const Person = require('./models/Person');
// end config

// start database
const uri = "mongodb+srv://lorenzo:12345@cluster0.wba683h.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
}

connect();
// end database

// start routes

app.get('/person', async (req, res) => {
  const persons = await Person.find();
  return res.send(persons);
});

app.post('/person', async (req, res) => {
  const  { name, age, approved } = req.body;
  const person = {
    name,
    age,
    approved
  }
  
  try {
    // save person
    await Person.create(person);
    res.status(201).send('Person created');
  } catch (error) {
    console.log(error);
  }
}); 

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