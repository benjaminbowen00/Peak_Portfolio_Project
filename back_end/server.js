const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  };

  const db = client.db("share_data");

  server.get("/api/shares", function(req, res) {
    db.collection("purchased_shares").find().toArray(function(err, result) {
      res.status(200);
      res.json(result);
    })
  })

  server.listen(5000, function() {
    console.log('Listening on port 5000');
  })

})
