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

			function init() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(pos) {
					myLat = pos.coords.latitude;
					myLng = pos.coords.longitude;

					var myOptions = {
						zoom: 8,
						center: new google.maps.LatLng(myLat, myLng),
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};		
				//var infowindow = new google.maps.InfoWindow();				
				map = new google.maps.Map(document.getElementById("canvas"), myOptions);
				//var infowindow = new google.maps.InfoWindow();
				FindMyLocation();
				})
			}
			//var my_location = new google.maps.LatLng(myLat, myLng);

			}

			function FindMyLocation() {
//				if (navigator.geolocation) {
//					navigator.geolocation.getCurrentPosition(function(pos) {
//						myLat = pos.coords.latitude;
//						myLng = pos.coords.longitude;
//					})
					//myLat = position.coords.latitude;
					//myLng = position.coords.longitude;
					drawMap();
				//}
			}

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