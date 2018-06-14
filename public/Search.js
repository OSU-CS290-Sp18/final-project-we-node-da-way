var searchBox = document.getElementById("search_box");
//console.log(searchBox);
function searchFunction(memes, input) {
	var name = memes.querySelector('.product_name')
	var searchInput = input.toLowerCase()
	var searchText = name.textContent.toLowerCase()
	
	if ((searchText.search(searchInput) == -1) && !memes.classList.contains('hidden')) {
		memes.classList.add('hidden');
	}
	else if (searchText.search(searchInput) != -1) {
		//console.log(name.textContent.search(input));
		memes.classList.remove('hidden');
	}
}

searchBox.addEventListener("input", function(event){
	var input = searchBox.value;
	var memes = document.getElementsByClassName('product_item');
	var i;
	//console.log(twits);
	for (i = 0; i < memes.length; i++){
		//console.log(i);
		searchFunction(memes[i], input);
	};
})
