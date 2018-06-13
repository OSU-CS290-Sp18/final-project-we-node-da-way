var product_container = document.getElementsByTagName("main")[0];
var Create_Modal_Backdrop = document.getElementById("item_modal_backdrop");
var Modal_Window = document.getElementById('item_modal_create');



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





Create_Modal();