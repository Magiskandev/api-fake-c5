var jsonServer = require('json-server');
var db = require('./db.json');
var fs = require('fs');
	
var server = jsonServer.create();

fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

var router = jsonServer.router('/tmp/db.json')
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
    console.log("Servidor corriendo en el puerot" + port)
});