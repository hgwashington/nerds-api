

const http = require('http')//http object
let nerds = require('nerds');
let multiPoke = nerds.resolve('Pokemon', 150).include(['name', 'type', 'hp']).asArray();

// console.log(multiPoke[0].name);


const server = http.createServer((req, res)=>{//creates the server
    const randNum= Math.floor(Math.random() * 150);
    const randNum2= Math.floor(Math.random() * 149);
    res.end(`<h1>${multiPoke[randNum].name} and ${multiPoke[randNum2].name}</h1>`);
});


server.listen(9000);