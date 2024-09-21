const express = require('express');
const app = express();

const port = 7865;
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    return res.status(404).send('Invalid cart ID. Please provide a valid number.');
  }
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

const server = app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
})

module.exports = app;
module.exports.server = server;
