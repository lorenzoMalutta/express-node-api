const mongoose = require('mongoose');
require('dotenv').config();

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