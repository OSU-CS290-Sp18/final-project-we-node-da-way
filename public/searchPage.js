var memes = document.getElementsByClassName('product_item');

var currentURL = window.location.pathname.split('-');
var searchKeyword = currentURL[currentURL.length - 1];
searchKeyword = searchKeyword.replace("%20", " ");
searchKeyword = searchKeyword.toLowerCase();

if (currentURL[0] == "/search") {
	
	for (var x = 0; x < memes.length; x = x + 1) {
	
		var memeName = memes[x].querySelector('.product_name').textContent;
		memeName = memeName.toLowerCase();
		
		if (memeName.search(searchKeyword) == -1 && !(memes[x].classList.contains('hidden'))) {

				memes[x].classList.add('hidden');
			
		}
		
	}
	
	for (var x = 0; x < memes.length; x = x + 1) {
	
		if (memes[x].querySelector('.product_name').textContent == "") {
			
			memes[x].remove();
			
		}
		
	}
	
}

