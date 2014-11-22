$(document).on('ready', function() {

	var map = L.map('map').setView([51.505, -0.09], 13);

	L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    id: 'examples.map-i875mjb7'
}).addTo(map);
  
});