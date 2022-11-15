// start config
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
// end config

// start database
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(DB_PASSWORD);

const uri = `mongodb+srv://${DB_user}:${DB_PASSWORD}@cluster0.wba683h.mongodb.net/?retryWrites=true&w=majority`;

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
const personRoutes = require('./routes/person');
const productRoutes = require('./routes/products');

app.use('/person', personRoutes);

app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// end routes