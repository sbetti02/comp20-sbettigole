function parse() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://messagehub.herokuapp.com/messages.json');
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4) {
	    	elem = document.getElementById("messages");
	    	parsing_json = JSON.parse(xhr.responseText);
	    	for (var i = 0; i < parsing_json.length; i++) {
	    		elem.innerHTML = elem.innerHTML + '<span>' + parsing_json[i].content + ' - ' + parsing_json[i].username + '</span>' + '<br>';
	    	}
    }
	}
	xhr.send();
}