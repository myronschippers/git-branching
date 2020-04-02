const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const carList = [];

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/car', (req, res) => {
  const carData = req.body;
  carList.push(carData);

  res.sendStatus(201);
});

app.get('/cars', (req, res) => {
  res.send(carList);
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});