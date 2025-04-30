require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');

// Basic Configuration
const port = process.env.PORT || 7777;
const client = new MongoClient(process.env.DB_URL);
const db = client.db("urlshorterner");
const urls = db.collection("urls");

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.post('/api/shorturl', (req, res) => {


  res.json({
    body: req.body
  })
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
