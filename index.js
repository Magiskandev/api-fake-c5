var jsonServer = require('json-server');
var db = require('./db.json');
var fs = require('fs');
	
var server = jsonServer.create();

fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

var router = jsonServer.router()
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);