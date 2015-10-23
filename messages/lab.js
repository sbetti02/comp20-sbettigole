// Your JavaScript goes here...
function parse() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json');
	// xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4) {
	        alert(xhr.responseText);
	        var json = data.json,
	        	obj = JSON.parse(json);
	        //xhr.send(JSON.stringify(myData));
	    }
	}
	xhr.send();

	//var json = '{"result":true,"count":1}',
    //	obj = JSON.parse(json);

	//alert(obj.count);
}