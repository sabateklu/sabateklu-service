const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Adventures = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/api/recommended', (req, res) => {
  Adventures.find({})
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get('/api/recommended/:id', (req, res) => {
  const { id } = req.params;
  Adventures.find({ _id: id })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.put('/api/recommended/:id', (req, res) => {
  const { id } = req.params;
  const { liked } = req.body;
  Adventures.findByIdAndUpdate(id, { liked: !liked }, { new: true, useFindAndModify: false })
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
