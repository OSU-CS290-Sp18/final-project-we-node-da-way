

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;
var fs = require('fs');

app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.get('/', function( req,res,next){
	res.status(200).sendFile(index.html);
});

app.get('*', function(req, res, next){
	res.status(404).render('404');
})

app.listen(port, function (){
	console.log("This memeingful server is running on port", port);
});
