var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//server the static files
app.use(express.static(__dirname + '/public'));

console.log('Server: http://localhost:' + port);
app.listen(port);