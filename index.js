var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/verifydocument');

http.createServer(app)
.listen(8083, function() {
	console.log('Servidor iniciado na porta 80');
});
