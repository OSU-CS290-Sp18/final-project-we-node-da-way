var product_container = document.getElementsByTagName("main")[0];
var Create_Modal_Backdrop = document.getElementById("item_modal_backdrop");
var Modal_Window = document.getElementById('item_modal_create');
var Modal_Close = document.getElementById("modal_close_button")
var handlebars = require('handlebars');
var item_modal = handlebars.compile('item_modal');



function Create_Modal(){
	product_container.addEventListener("click", function(event){
		memeURL = event.target.getElementById("product_image").getAttribute("src");
		name = event.target.getElementsByClassName("always_hidden")[0].value;
		description = event.target.getElementsByClassName("always_hidden")[1].value;
		price = event.target.getElementsByClassName("product_price")[0].value;

		if(event.target.className === "product_item") {
				var context = {
					memeURL: memeURL,
					name: name,
					description: description,
					price: price
				}
			// for(var i =0; i <= Create_Modal_Backdrop.length; i++){
				console.log("1+1");
				Create_Modal_Backdrop.classList.remove('hidden');
				Modal_Window.classList.remove('hidden');
			// }
		}
	});
}



function Close_Modal(){
	Modal_Close.addEventListener("click", function(){
		Modal_Window.classList.add("hidden");
		Create_Modal_Backdrop.classList.add('hidden');
	});
}





Create_Modal();
Close_Modal();
