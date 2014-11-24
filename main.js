$(document).on('ready', function() {

	var map = L.map('map').setView([40.023798, -105.266070], 13);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    id: 'examples.map-i875mjb7'
	}).addTo(map);

//set marker
	var marker = L.marker([40.023798, -105.266070]).addTo(map);

//create a circle
	var circle = L.circle([40.023798, -105.266070], 500, {
		color: 'blue',
		fillColor: 'lightblue',
		fillOpacity: 0.5
	}).addTo(map);

//event for circle click
	circle.bindPopup("I am a circle");

	var popup = L.popup();

	function onMapClick(e) {
	    popup
	        .setLatLng(e.latlng)
	        .setContent("You clicked the map at " + e.latlng.toString())
	        .openOn(map);
	}

	map.on('click', onMapClick);
  
});//end of jQuery