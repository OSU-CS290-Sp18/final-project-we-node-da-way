function handleRemoveFromCart(event) {

}

function handleAddToCart(event) {
	var memeName = event.target.getElementsByClassName('meme_name')[0];
	var memeURL = event.target.getElementsByClassName("product_image")[0].getAttribute("src");
	var description = event.target.getElementsByClassName('description')[0];
	var price =event.target.getElementsByClassName('product_price')[0] ;

	var request = new XMLHttpRequest();
	var url = "/addCart"
	request.open("POST", url);
	var requestBody = JSON.stringify({
   		memeName: memeName,
   		memeURL: memeURL,
		description: description,
		price: price
 	});

	request.addEventListener('load', function() {

	})
}

function handleCheckout(event) {

}
