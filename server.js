require('dotenv').config();
 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
 
const app = express();
const port = process.env.PORT || 4000;
 
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// request handlers
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Tutorial! - ' + req.user.name);
});
 
app.listen(port, () => {
  console.log('Server started on: ' + port);
});

