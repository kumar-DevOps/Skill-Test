const express = require('express');
const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
  res.json({ message: 'Gateway Service is running!' });
});

// Example proxy routes (optional)
app.get('/users', (req, res) => {
  res.json({ message: 'This would call User Service' });
});

app.get('/products', (req, res) => {
  res.json({ message: 'This would call Product Service' });
});

app.listen(PORT, () => {
  console.log(`Gateway Service listening on port ${PORT}`);
});
