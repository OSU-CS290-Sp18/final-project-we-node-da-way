var fs = require('fs');
var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;

var testData = require('./testData');

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || cs290_liechtya;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB || cs290_liechtya

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoDB = NULL;

app.use(bodyParser.json());

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

app.get('/cart', function(req, res, next){
	var cart = mongoDB.collection('cart');
	cart.find().toArray(function(err, cartDoc){
		if (err) {
			res.status(500).send("Error fetching cart from DB");
		} else {
			res.status(200).render('cart', cartDoc);
		}
	});
});

app.post('/addCart' function(req, res, next){
	var meme = {
		memeURL: req.body.memeURL,
		price: req.body.price
	};
	var MemeCollection = mongoDB.collection('memes');
	var cart = mongoDB.collection('cart');

	cart.addOne(
		{ memeURL: memeURL,
		  price: price},
		function(err, result) {
			if(err) {
				res.status(500).send("error inserting item in cart");
			} else {
				res.status(200).end();
			}
		}
	)
});

app.post('/checkout/checkout' function(req, res, next){

});

app.get('/')

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

mongoClient.connect(mongoURL, function(err, client){
	if (err) {
		throw err;
	}
	mongoDB = client.db(mongoDBName);
	app.listen(port, function() {
		console.log("This memeingful server is running on port", port);
	});
})
