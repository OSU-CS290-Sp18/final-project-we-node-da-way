var fs = require('fs');
var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars');
var handlebars = require('handlebars');
var mongoClient = require('mongodb').MongoClient;

var testData = require('./testData');
var meme = require('./meme');

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var options = {

	index: false

};

app.use(express.static('public', options));

app.engine('handlebars', express_handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res, next) {

	res.status(200);
	res.render('index', {

		// products: testData
		products: meme

	});

});

app.get('/index', function(req, res, next) {

	res.status(200);
	res.render('index', {

		// products: testData
		products: meme

	});

});

app.get('/about', function(req, res, next){
	res.status(200).render('about');
});

app.get('/contact', function(req, res, next){
	res.status(200).render('contact');
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
