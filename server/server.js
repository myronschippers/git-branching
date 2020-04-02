const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

const carList = [];

app.use(express.static('public'));

app.get('/cars', (req, res) => {
  res.send(carList);
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});