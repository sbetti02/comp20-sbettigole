// Your JavaScript goes here...
function parse() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json');
	// xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4) {
	    	//elem = xhr.responseText;
	    	elem = document.getElementById("messages");
	    	parsing_json = JSON.parse(xhr.responseText);
	    	//elem.innerHTML = xhr.responseText;
	    	for (var i = 0; i < parsing_json.length; i++) {
	    		elem.innerHTML = elem.innerHTML + '<br>' + parsing_json[i].content + ' ' + parsing_json[i].username;
	    	}

	        //alert(xhr.responseText);
	        //var json = data.json,
	        //	obj = JSON.parse(json);
	        //xhr.send(JSON.stringify(myData));
	    }
	}
	xhr.send();

	//var json = '{"result":true,"count":1}',
    //	obj = JSON.parse(json);

	//alert(obj.count);
}