const express = require('express');

const app = express();
const PORT = 7865;

// Route for the index page
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Route for the cart page with number validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

