const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const router = express.Router();
mongoose.connect('mongodb://localhost:27017/artists')
.then(() => console.log('MongoDB Connected'))

const Artist = require('./Models/Artist.js')
const port = 5000;

app.get("/", (req, res) => {
  Artist.find({})
  .then(docs => {
    res.json(docs[0])
  })
});

app.get("/artists", (req, res) => {
  Artist.find({})
  .then(docs => {
    res.send(docs)
  })
});

app.get("/artists/albums", (req, res) => {
  albums = data.artists.map( item => item.albums)
  res.send(albums)
});



app.listen(port, () => {
  console.log("Server listening on port " + port);
});