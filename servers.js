var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js')


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('about us!');
});


app.use(express.static(__dirname+'/public'));
console.log(__dirname);

app.listen(PORT, function() {
	console.log('The server has started! :)');
});

//about 
//about us