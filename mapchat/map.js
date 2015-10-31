//function map() {

//			var xhr = new XMLHttpRequest();
//	xhr.open('POST', 'https://secret-about-box.herokuapp.com/sendLocation');
//	xhr.onreadystatechange = function () {
//	    if (xhr.readyState == 4) {
//	    	var myLat = 0;
//	    	var myLng = 0;
//	    	var my_location = new google.maps.LatLng(myLat, myLng);
//	    	console.log(my_location);
	    	//parsing_json = JSON.parse(xhr.responseText);
	    	//for (var i = 0; i < parsing_json.length; i++) {
	    	//	elem.innerHTML = elem.innerHTML + '<span>' + parsing_json[i].content + ' - ' + parsing_json[i].username + '</span>' + '<br>';
	    	//}
   // }
//	}
//	xhr.send();
//}

// xmlHttprequest

			//var myLat = 0;
			//var myLng = 0;
			//var my_location = new google.maps.LatLng(myLat,  myLng);
			var login = "VicJohnson";
			var myLat;
			var myLng;
			function init() {
			//var myLat;
			//var myLng;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(pos) {
					myLat = pos.coords.latitude;
					myLng = pos.coords.longitude;

					var myOptions = {
						zoom: 12,
						center: new google.maps.LatLng(myLat, myLng),
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};		
				//var infowindow = new google.maps.InfoWindow();				
				map = new google.maps.Map(document.getElementById("canvas"), myOptions);
				//me = myOptions.center;
				//var myMarker = new google.maps.Marker({position: me, title: login, message: "Found Me!!!!"});
				//myMarker.setMap(map);
				//google.maps.event.addListener(myMarker, 'click', function() {
				//	var myInfo = new google.maps.InfoWindow();
				//	myInfo.setContent(myMarker.message + " - " + myMarker.title);
				//	myInfo.open(map, myMarker)
				//})
				//var infowindow = new google.maps.InfoWindow();
				//FindMyLocation();
				//drawMap();
				//var myLocation = "login=" + login + "&lat=" + myLat + "&lng=" + myLng + "&message=" + "Hello!";
				sendLocation();
				//mapMe(myLat, myLng);
				//drawMap();
				})
			}
		}
/*			function mapMe(lat, lng) {
				me = new google.maps.LatLng(myLat, myLng);
				myMarker = new google.maps.Marker({
					position: me,
					title: "Found Me!"
				});
				marker.setMap(map);
				var infowindow = new google.maps.InfoWindow();
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});		
			}*/









			function sendLocation(myLocation) {
				var myLocation = "login=" + login + "&lat=" + myLat + "&lng=" + myLng + "&message=" + "Hello!";
				request = new XMLHttpRequest();
				var URI = "https://secret-about-box.herokuapp.com/sendLocation";
				request.open("POST", URI, true);
				request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				request.onreadystatechange = function isready() {
					if (request.readyState == 4) {
						var everyone = JSON.parse(request.response);
						showEveryone(everyone);
						//console.log(everyone); // remove line!!!
					}
				}
				//function isready () {
				//	if (request.readyState == 4) {
				//		var everyone = JSON.parse(request.response);
				//	}
				//}
				request.send(myLocation);
			}

			function showEveryone(everyone) {
				var personInfoWindow = new google.maps.InfoWindow();
				for (var i = 0; i < everyone.length; i++) {
					var location = new google.maps.LatLng(everyone[i].lat, everyone[i].lng);
					if ((everyone[i].lat == myLat) && (everyone[i].lng == myLng)) {
						var myMarker = new google.maps.Marker({position: location, title: login, icon: 'https://cdn2.iconfinder.com/data/icons/fugue/icon/trophy.png'});
						myMarker.message = "Found Me!!!";
						myMarker.setMap(map);
						google.maps.event.addListener(myMarker, 'click', function() {
							personInfoWindow.setContent(this.message + " - " + this.title);
							personInfoWindow.open(map, this)
						})
					}
					else {
					distance = distance_from(everyone[i]);
					var newMarker = new google.maps.Marker({position: location, title: everyone[i].login});
					newMarker.message = everyone[i].message;
					newMarker.setMap(map);
					//var messageInfo = everyone[i].message;
					google.maps.event.addListener(newMarker, 'click', function() {
					//	var personInfoWindow = new google.maps.InfoWindow();
						personInfoWindow.setContent("Name: " + this.title + " Distance from me: " + distance + " Message: " + this.message);
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
				var distance = 3959 * b;
				return distance;
			}

						/*function showEveryone(everyone) {
				var personInfoWindow = new google.maps.InfoWindow();
				for (var i = 0; i < everyone.length; i++) {
					var location = new google.maps.LatLng(everyone[i].lat, everyone[i].lng);
					var newMarker = new google.maps.Marker({position: location, title: everyone[i].login});
					newMarker.message = everyone[i].message;
					newMarker.setMap(map);
					//var messageInfo = everyone[i].message;
					google.maps.event.addListener(newMarker, 'click', function() {
					//	var personInfoWindow = new google.maps.InfoWindow();
						personInfoWindow.setContent("Name: " + this.title + " Message: " + this.message);
						personInfoWindow.open(map, this);
					})
				}
			}*/

	/*function sendLocation(myLocation) {
				console.log(login);
				console.log(myLat);
				console.log(myLng);
				var myLocation = "login=" + login + "&lat=" + myLat + "&lng=" + myLng + "&message=" + "Hello!";
				request = new XMLHttpRequest();
				console.log(myLocation);
				console.log(login + "2");
				var URI = "https://secret-about-box.herokuapp.com/sendLocation";
				request.open("POST", URI, true);
				request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				request.onreadystatechange = 
				function isready () {
					if (request.readyState == 4) {
						var everyone = JSON.parse(request.response);
						console.log(everyone);
					}
					else {
						console.log("yoooo");
					}
				}
				//isready();
				request.send(myLocation);
			}
*/


			//function FindMyLocation() {
//				if (navigator.geolocation) {
//					navigator.geolocation.getCurrentPosition(function(pos) {
//						myLat = pos.coords.latitude;
//						myLng = pos.coords.longitude;
//					})
					//myLat = position.coords.latitude;
					//myLng = position.coords.longitude;
			//		drawMap();
				//}
			//}

			function drawMap() {
				me = new google.maps.LatLng(myLat, myLng);
				map.panTo(me);
				//for (int i = 0; i < list.length; i++) {
				//	marker
				//}
				marker = new google.maps.Marker({
					position: me,
					title: "Found Me!"
				});
				marker.setMap(map);
				var infowindow = new google.maps.InfoWindow();
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});
			}
			/*function init()
			{
				map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				getMyLocation();
			}
			
			function getMyLocation() {
				if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
					navigator.geolocation.getCurrentPosition(function(position) {
						myLat = position.coords.latitude;
						myLng = position.coords.longitude;
						renderMap();
					});
				}
				else {
					alert("Geolocation is not supported by your web browser.  What a shame!");
				}
			}
			function renderMap()
			{
				me = new google.maps.LatLng(myLat, myLng);
				
				// Update map and go there...
				map.panTo(me);
	
				// Create a marker
				marker = new google.maps.Marker({
					position: me,
					title: "Here I Am!"
				});
				marker.setMap(map);
					
				// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});
			}*/
//}