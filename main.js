$(document).on('ready', function() {

	var map = L.map('map').setView([40.023798, -105.266070], 13);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    id: 'examples.map-i875mjb7'
	}).addTo(map);

	var marker = L.marker([40.023798, -105.266070]).addTo(map);

	var circle = L.circle([40.023798, -105.266070], 500, {
		color: 'blue',
		fillColor: 'lightblue',
		fillOpacity: 0.5
	}).addTo(map);
  
});//end of jQuery