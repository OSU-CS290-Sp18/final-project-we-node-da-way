var product_container = document.getElementsByTagName("main")[0];
var Create_Modal_Backdrop = document.getElementById("item_modal_backdrop");
var Modal_Window = document.getElementById('item_modal_create');
var Modal_Close = document.getElementById("modal_close_button")



function Create_Modal(){
	product_container.addEventListener("click", function(event){


		if(event.target.className === "product_image") {

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
