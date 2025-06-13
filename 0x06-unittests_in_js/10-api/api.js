const express = require('express');
const app = express();
const PORT = 7865;

// Middleware to parse JSON body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Route with numeric ID validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// New: /available_payments endpoint
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New: /login endpoint
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
