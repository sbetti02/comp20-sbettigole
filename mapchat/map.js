var login = "VicJohnson";
var myLat;
var myLng;
function init() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(pos) {
			myLat = pos.coords.latitude;
			myLng = pos.coords.longitude;

			var myOptions = {
				zoom: 12,
				center: new google.maps.LatLng(myLat, myLng),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};		
			map = new google.maps.Map(document.getElementById("canvas"), myOptions);

			sendLocation();

		})
	}
}

function sendLocation(myLocation) {
	var myLocation = "login=" + login + "&lat=" + myLat + "&lng=" + myLng + "&message=" + "Hello!";
	request = new XMLHttpRequest();
	var URI = "https://lit-bastion-2806.herokuapp.com/sendLocation";
	request.open("POST", URI, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function isready() {
		if (request.readyState == 4) {
			var everyone = JSON.parse(request.response);
			showEveryone(everyone);
		}
	}
	request.send(myLocation);
}

function showEveryone(everyone) {
	var personInfoWindow = new google.maps.InfoWindow();
	for (var i = 0; i < everyone.length; i++) {
		var location = new google.maps.LatLng(everyone[i].lat, everyone[i].lng);
		if ((everyone[i].lat == myLat) && (everyone[i].lng == myLng)) {
			var myMarker = new google.maps.Marker({position: location, title: login, icon: 'trophy.png'});
			myMarker.message = "Found Me!!!";
			myMarker.setMap(map);
			google.maps.event.addListener(myMarker, 'click', function() {
				personInfoWindow.setContent(this.message + " - " + this.title);
				personInfoWindow.open(map, this)
			})
		}
		else {
			var newMarker = new google.maps.Marker({position: location, title: everyone[i].login});
			newMarker.message = everyone[i].message;
			newMarker.distance = distance_from(everyone[i]);
			newMarker.setMap(map);
			google.maps.event.addListener(newMarker, 'click', function() {
				personInfoWindow.setContent("Name: " + this.title + " Distance from me: " + this.distance + " miles." + " Message: " + this.message);
				personInfoWindow.open(map, this);
			})
		}
	}
}

function distance_from(person) {
	var myLatRad = (myLat * (Math.PI/180));
	var myLngRad = (myLng * (Math.PI/180));
	var theirLat = (person.lat * (Math.PI/180));
	var theirLng = (person.lng * (Math.PI/180));
	var differenceLat = theirLat - myLatRad;
	var differenceLng = theirLng - myLngRad;
	var a = Math.sin(differenceLat/2) * Math.sin(differenceLat/2)+
			Math.sin(differenceLng/2) * Math.sin(differenceLng/2) *
			(Math.cos(myLatRad) * Math.cos(myLngRad));
	var b = (2 * Math.atan(Math.sqrt(a), Math.sqrt(1-a)));
	var distance = (6371/1.609344) * b;
	return distance;
}