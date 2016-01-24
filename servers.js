var express = require('express');
var app = express();


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();

	},
	logger: function (req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' +  new Date().toString() );
		next();
	}


};



app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('about us');
});


app.use(express.static(__dirname+'/public'));
console.log(__dirname);

app.listen(3000, function() {
	console.log('The server has started! :)');
});

//about 
//about us