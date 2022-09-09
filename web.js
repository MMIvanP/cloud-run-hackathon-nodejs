const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F', 'T', 'L', 'R'];
  const myURL = 'https://cloud-run-hackathon-nodejs-esifpexcba-uc.a.run.app';
  
  // TODO add your implementation here to replace the random response
  try{
  console.log(`WHERE AM I? ${req.body.arena.state}`)
  }catch{};
  
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
