const express = require('express');

const app = express();
const PORT = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the index page
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// Route for the cart page with number validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// New route for available payments
app.get('/available_payments', (_, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New route for login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

