function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }//random num generator

const http = require('http')//http object
let nerds = require('nerds');
let multiPoke = nerds.resolve('Pokemon', 3).include(['name', 'type', 'hp']).asArray();

// console.log(multiPoke[0].name);


const server = http.createServer((req, res)=>{//creates the server
    const randNum= Math.floor(Math.random() * 3);
    res.end(`<h1>${multiPoke[randNum].name}</h1>`);
});


server.listen(9000);