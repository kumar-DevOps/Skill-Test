const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Product Service is running!' });
});

app.listen(PORT, () => {
  console.log(`Product Service listening on port ${PORT}`);
});
