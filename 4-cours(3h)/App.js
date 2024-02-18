const http=require('http')
const rout=require("./firts-app/routing.js")
const app=require('./serveur.js')
const server=http.createServer(rout)

server.listen(3000, 'localhost', () => {
    console.log('Server running  at 172.0.0.1.......');
  });
