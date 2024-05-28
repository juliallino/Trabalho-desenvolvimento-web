function initialize() {
	var myOptions = {
		zoom: 16,
		center: new google.maps.LatLng(-3.76876453982344, -38.47806052088885), //change the coordinates
		// center: new google.maps.LatLng(51.489500, -0.096777), //change the coordinates
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,
		}
	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(-3.76876453982344, -38.47806052088885) //change the coordinates
		// position: new google.maps.LatLng(51.489500, -0.096777) //change the coordinates
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);