// Your JavaScript goes here...
parse() {
	var json = '{"result":true,"count":1}',
    	obj = JSON.parse(json);

	alert(obj.count);
}
