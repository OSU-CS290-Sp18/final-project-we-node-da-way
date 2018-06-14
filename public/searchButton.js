var searchButton = document.getElementById("search_button");
var searchBox = document.getElementById("search_box");

searchButton.addEventListener("click", function(event) {
	
	if (searchBox.value != "") {
		
		window.location = "/search-" + searchBox.value;
		
	}
	
})