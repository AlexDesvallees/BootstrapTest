// Param section
var lat = 47.218371;
var long = -1.553621;
var zoom = 11;

// Camera of the map when loading
var map = L.map('mapid').setView([lat, long], zoom);

// Cursor
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, long]).addTo(map)
    .bindPopup('Hello my friend !<br> Welcome to Nantes :)')
    .openPopup();