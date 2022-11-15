// start config
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/routes');
// end config

// start database
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wba683h.mongodb.net/?retryWrites=true&w=majority`;

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
app.use(router);
// end routes


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;