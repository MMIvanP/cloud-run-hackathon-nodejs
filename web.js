const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F', 'L', 'R'];
  const myURL = 'https://cloud-run-hackathon-nodejs-esifpexcba-uc.a.run.app';
  const everyoneState = req.body.arena.state;
  const myState = req.body.arena.state['https://cloud-run-hackathon-nodejs-esifpexcba-uc.a.run.app'];
  const myLocation = [myState.x, myState.y];
  const myX = myState.x;
  const myY = myState.y;
  const myDirection = myState.direction;
  const wasHit = myState.wasHit;
  
  // TODO add your implementation here to replace the random response
  try{
    console.log('Here are all the states');
    console.log(req.body.arena.state);
    console.log(`WHERE AM I?`);
    console.log(myLocation);
    console.log(`Where am I facing`);
    console.log(myDirection);
    
    everyone = [];
    try{
      console.log(everyoneState.keys());
    }catch{};

  }catch{};

  if (wasHit){
    res.send('F');
  }
  else{
    res.send(moves[Math.floor(Math.random() * moves.length)]);
  }
  
});

app.listen(process.env.PORT || 8080);
