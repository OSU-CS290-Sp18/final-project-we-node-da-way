module.exports = {

Remove: function handleRemoveFromCart(event) {
	var memeName = event.target.getElementById('item_name');
	var url = "/cart/removeFromCart";

	var request = new XMLHttpRequest();
	request.open("POST", url);
	var requestBody = JSON.stringify({
		name: memeName;
	})

	request.addEventListener('load', function(event) {
		if(event.target.status === 200){
			console.log("Item removed from cart");
		} else {
			console.log("(╯°□°)╯︵ ┻━┻");
		}
	});


	request.setRequestHeader('Content-Type', 'application/json');
	request.send(requestBody);
}

Add: function handleAddToCart(event) {
	var memeName = event.target.getElementsByClassName('meme_name')[0];
	var memeURL = event.target.getElementsByClassName("product_image")[0].getAttribute("src");
	var description = event.target.getElementsByClassName('description')[0];
	var price =event.target.getElementsByClassName('product_price')[0] ;

	var request = new XMLHttpRequest();
	var url = "/addCart";
	request.open("POST", url);
	var requestBody = JSON.stringify({
   		memeName: memeName,
   		memeURL: memeURL,
		description: description,
		price: price
 	});

	request.addEventListener('load', function(event) {
		if(event.target.status === 200){
			console.log("Go Beavs");
			
		} else {
			console.log("(╯°□°)╯︵ ┻━┻");
		}
	});

	request.setRequestHeader('Content-Type', 'application/json');
	request.send(requestBody);
}

Checkout: function handleCheckout(event) {
	var firstName = document.getElementsByClassName('Billing').getElementsByTagName('input')[0];
	var lastName = document.getElementsByClassName('Billing').getElementsByTagName('input')[1];
	var Address = document.getElementsByClassName('Billing').getElementsByTagName('input')[2];
	var Country = document.getElementsByClassName('Billing').getElementsByTagName('input')[3];
	var State = document.getElementsByClassName('Billing').getElementsByTagName('input')[4];
	var Zip = document.getElementsByClassName('Billing').getElementsByTagName('input')[5];
	var Phone = document.getElementsByClassName('Billing').getElementsByTagName('input')[6];
	var Method = document.getElementsByClassName('Payment_Method').getElementsByTagName('input')[0];
	var CardNum = document.getElementsByClassName('Payment_Method').getElementsByTagName('input')[1];
	var Expiration = document.getElementsByClassName('Payment_Method').getElementsByTagName('input')[2];
	var url = "/Thanks";
	var request = new XMLHttpRequest();
	request.open("get", url);

	var requestBody = JSON.stringify({
   		firstname: firstName,
   		lastname: lastName,
		address: Address,
		country: Country,
		state: State,
		zip: Zip,
		method: Method,
		cardNum: CardNum,
		expire: Expiration
 	});

	request.addEventListener('load', function(event) {
		if(event.target.status === 200){
			console.log("Your order is in place");
		} else {
			console.log("(╯°□°)╯︵ ┻━┻");
		}
	});
}

}
