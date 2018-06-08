var fs = require('fs');
var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars');
var handlebars = require('handlebars');

var testData = require('./testData');

var app = express();
var port = process.env.PORT || 3000;

var options = {
	
	index: false
	
};

app.use(express.static('public', options));

app.engine('handlebars', express_handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res, next) {
	
	res.status(200);
	res.render('index', {
		
		products: testData
		
	});
	
});

app.get('/index', function(req, res, next) {
	
	res.status(200);
	res.render('index', {
		
		products: testData
		
	});
	
});

app.get('/about', function(req, res, next){
	res.status(200).render('about');
});

app.get('/contact', function(req, res, next){
	res.status(200).render('about');
});

app.get('/mission', function(req, res, next){
	res.status(200).render('mission');
});


app.get('*', function(req, res, next) {
	
	res.status(404);
	res.render('404');
})

app.listen(port, function() {
	
	console.log("This memeingful server is running on port", port);
	
});
