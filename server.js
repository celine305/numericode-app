const express = require('express');
const cors = require('cors');

const helpers = require('./helpers');

const app = express();
app.use(cors());

app.get('/decoder/:numericode', (req, res) => {
  const originalMessage = helpers.decoder(req.params.numericode);

  res.json(originalMessage);
});

const port = 5000;

app.listen (port, () => console.log(`Server started on port ${port}`));
