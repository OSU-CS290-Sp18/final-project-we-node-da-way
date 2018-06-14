

function handleRemoveFromCart(event) {
	var memeName = event.target.getElementById('item_name');
	var url = "/cart/removeFromCart";

	var request = new XMLHttpRequest();
	request.open("POST", url);
	var requestBody = JSON.stringify({
		name: memeName,
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

var addButton = document.getElementsByClassName('modal_add_item_button')[0];
addButton.addEventListener('click', function handleAddToCart(event) {
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
)

function handleAddToCart(event) {
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

var firstName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[0].value;
var lastName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[1].value;
var Address = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[2].value;
var Country = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[3].value;
var State = document.getElementsByClassName('Billing')[0].querySelectorAll('input')[4].value;
var Zip = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[5].value;
var Phone = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[6].value;
var Method = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[0].value;
var CardNum = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[1].value;
var Expiration = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[2].value;

console.log(document.getElementsByClassName('Billing')[0].getElementsByTagName('input'));


document.addEventListener('input', function (event) {
	firstName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[0].value;
	lastName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[1].value;
	Address = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[2].value;
	Country = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[3].value;
	State = document.getElementsByClassName('Billing')[0].querySelectorAll('input')[4].value;
	Zip = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[5].value;
	Phone = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[6].value;
	Method = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[0].value;
	CardNum = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[1].value;
	Expiration = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[2].value;
})

var Checkout_button = document.getElementsByClassName('checkout_button')[0];
Checkout_button.addEventListener('click', function handleCheckout(event) {
	var firstName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[0].value;
	var lastName = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[1].value;
	var Address = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[2].value;
	var Country = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[3].value;
	var State = document.getElementsByClassName('Billing')[0].querySelectorAll('input')[4].value;
	var Zip = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[5].value;
	var Phone = document.getElementsByClassName('Billing')[0].getElementsByTagName('input')[6].value;
	var Method = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[0].value;
	var CardNum = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[1].value;
	var Expiration = document.getElementsByClassName('Payment_Method')[0].getElementsByTagName('input')[2].value;
	console.log(State);
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
			alert("(╯°□°)╯︵ ┻━┻");
		}
	});

	request.setRequestHeader('Content-Type', 'application/json');
	request.send(requestBody);

});
