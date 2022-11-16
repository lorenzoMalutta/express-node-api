// start config
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
require('./database/mongo');
const router = require('./routes/routes');
// end config

app.use(router);

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
