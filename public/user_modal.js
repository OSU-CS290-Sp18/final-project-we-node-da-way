var product_container = document.getElementsByTagName("main")[0];
var Create_Modal_Backdrop = document.getElementById("item_modal_backdrop");
var Modal_Window = document.getElementById('item_modal_create');
var Modal_Close = document.getElementById("modal_close_button")


function item_click(element){
	var imageURL = element.src;
	console.log(imageURL);
	Create_Modal_Backdrop.classList.remove('hidden');
	Modal_Window.classList.remove('hidden');
}




// function Create_Modal(){
// 	product_container.addEventListener("click", function(event){


// 		if(event.target.className === "product_image") {

// 				var path = this.item_image.src;
// 				alert(this.item_image.name);
// 				Create_Modal_Backdrop.classList.remove('hidden');
// 				Modal_Window.classList.remove('hidden');

// 		}
// 	});
// }



function Close_Modal(){
	Modal_Close.addEventListener("click", function(){
		Modal_Window.classList.add("hidden");
		Create_Modal_Backdrop.classList.add('hidden');
	});
}





// Create_Modal();
// item_click(element);
Close_Modal();
