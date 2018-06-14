var product_container = document.getElementsByTagName("main")[0];

var Modal_Close;
var imageURL;
var add_cart_button;
//var Create_Modal_Backdrop;


// function checkURL(url) {
//     return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
// }

//function button_listen(){



function send_link(){
	The_memeURL = imageURL;
	meme_name = document.getElementById("hi"+imageURL).getElementsByClassName("modal_dialog")[0].getElementsByClassName("modal_header")[0].getElementsByClassName("meme_name_get")[0].textContent;
meme_desc = document.getElementById("hi"+imageURL).getElementsByClassName("modal_dialog")[0].getElementsByClassName("item_image_description")[0].getElementsByClassName("meme_desc_get")[0].textContent;
meme_price = document.getElementById("hi"+imageURL).getElementsByClassName("modal_dialog")[0].getElementsByClassName("item_image_description")[0].getElementsByClassName("meme_price_get")[0].textContent;

var final_string = meme_name + "/" + The_memeURL + "/" + meme_desc + "/" + meme_price;
console.log(final_string);
window.location.href = final_string;

}


//Start.getElementsByClassName("modal_dialog"){
	
//	meme_Name = Start.modal_dialog.modal_header.h4.textContent;
//	meme_desc = Start.modal_dialog.item_image_description.p.textContent;
//	meme_price = Start.modal_dialog.item_image_description.b.textContent;


//}

function Close_Modal(){


	Modal_Close = document.getElementById("bye"+imageURL);
	Modal_Close.addEventListener("click", function(){
			var Close_Modal_Backdrop = document.getElementById(imageURL);
			var Modal_Window = document.getElementById("hi"+imageURL);

				Close_Modal_Backdrop.classList.add('hidden');
				Modal_Window.classList.add('hidden');
	});

}


function item_click(element){
	imageURL = element.src;
	imageURL = imageURL.replace("http://localhost:3000", "");
	var Create_Modal_Backdrop = document.getElementById(imageURL);
	var Modal_Window = document.getElementById("hi"+imageURL);


	console.log(imageURL);
	// if (imageURL == )

	Create_Modal_Backdrop.classList.remove('hidden');
	Modal_Window.classList.remove('hidden');
	Close_Modal();
	// var x = checkURL(imageURL);
}

