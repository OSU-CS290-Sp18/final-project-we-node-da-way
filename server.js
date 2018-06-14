var fs = require('fs');
var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;

var testData = require('./testData');
//var meme = require('./meme');

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_liechtya";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_liechtya";
var mongoDBName = process.env.MONGO_DB || "cs290_liechtya";

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoDB = null;

app.use(bodyParser.json());

var options = {

	index: false

};

app.use(express.static('public', options));

app.engine('handlebars', express_handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res, next) {

	var memes = mongoDB.collection('memes');
	memes.find({}, {fields: {_id: 0}}).toArray(function(err, memeDoc){
		if (err) {
			res.status(500).send("Error fetching memes");
		} else {
			res.status(200);
			res.render('index', {

				// products: testData
				products: memeDoc[0]

			});
		}
	})

});

app.get('/index', function(req, res, next) {
	var memes = mongoDB.collection('memes');
	memes.find().toArray(function(err, memeDoc){
		if (err) {
			res.status(500).send("Error fetching memes");
		} else {
			res.status(200);
			res.render('index', {

				// products: testData
				products: memeDoc[0]

			});
		}
	})
});

app.get('/search-`:keyword', function(req, res, next){

	var memes = mongoDB.collection('memes');

	memes.find().toArray(function(err, memeDoc){

		if (err) {

			res.status(500).send("Error fetching memes");

		} else {

			res.status(200);
			res.render('index', {

				products: memeDoc[0]

			});
		}
	})

})

app.get('/cart', function(req, res, next){
	var cart = mongoDB.collection('cart');
	cart.find().toArray(function(err, cartDoc){
		if (err) {
			res.status(500).send("Error fetching cart from DB");
		} else {
			res.status(200).render('cart', { cart_items: cartDoc});
		}
	});
});

app.get('/checkout', function(req, res, next){
	res.status(200).render('checkout');
})

app.get('/:memeName/:memeURL/:memeDesc/:memePrice', function(req, res, next) {
	console.log(req.url);
	var meme = {
		memeName: req.params.memeName,
		memeURL: "/" + req.params.memeURL,
		price: req.params.memePrice,
		description: req.params.memeDesc,
		quantity: 1
	};
	console.log(req.params.memeName);
	console.log(req.params.memeDesc);
	var MemeCollection = mongoDB.collection('memes');
	var cart = mongoDB.collection('cart');

	cart.insertOne(meme,
		function(err, result) {
			if(err) {
				res.status(500).send("Error inserting item in cart");
			} else {
				console.log("Success");
				res.redirect('/');
			};
		}
	)

});

app.post('/addCart', function(req, res, next){
	var meme = {
		memeName: req.body.memeName,
		memeURL: req.body.memeURL,
		price: req.body.price,
		description: req.body.description
	};
	var MemeCollection = mongoDB.collection('memes');
	var cart = mongoDB.collection('cart');

	cart.insertOne(
		{ memeName: memeName,
		  memeURL: memeURL,
		  description: description,
		  price: price,
	  	  quantity: 1},
		function(err, result) {
			if(err) {
				res.status(500).send("Error inserting item in cart");
			} else {
				res.status(200).end();
			}
		}
	)

});

app.post('/cart/removeFromCart', function(req, res, next){
	var cart = mongoDB.collection('cart');
	cart.removeOne({name: req.body.name}, function(err){
		if (err) {
			alert("Something happened with MongoDB. Can not remove meme from cart");
		}
	});
})

app.get('/Thanks', function(req, res, next){
	var order = mongoDB.collection('order');
	var cart = mongoDB.collection('cart');
	order.insertOne(

		{	firstName: req.body.firstname,
			lastName: req.body.lastname,
			Address: req.body.address,
			Country: req.body.country,
			State: req.body.state,
			Zip: req.body.zip,
			Phone: req.body.phone,
			items: cart.find().toArray(),
			Method: req.body.method,
			CardNum: req.body.cardNum,
			Expiration: req.body.expire
		}, function(err, result) {
			console.log(req.body.state);
			if(err){
				res.status(500).send("Error sending your order");
			} else {
				cart.remove({});
				res.status(200).render('Thanks');
			}

		});
});

app.post('/addMeme', function(req, res, next){

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

mongoClient.connect(mongoURL, function(err, client){
	if (err) {
		throw err;
	}
	mongoDB = client.db(mongoDBName);
	app.listen(port, function() {
		console.log("This memeingful server is running on port", port);
	});
})

handlebars.registerHelper('for', function(context, block) {
    var accum = '';
    for(var i = 1; i < context.length ; i ++)
        accum += block.fn(context[i]);
    return accum;
});
