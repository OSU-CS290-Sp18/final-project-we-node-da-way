var product_container = document.getElementsByTagName("main")[0];

var Modal_Close;
var imageURL;
//var Create_Modal_Backdrop;


// function checkURL(url) {
//     return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
// }


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








// checkURL(imageURL);
// Create_Modal();
// item_click(element);
// Close_Modal();
