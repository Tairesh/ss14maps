
const map = L.map('map', {
    crs: L.CRS.Simple
});

function loadMap(file, size) {
    const bounds = [[0, 0], size];

    L.imageOverlay(file, bounds).addTo(map);

    map.fitBounds(bounds);
    function onMapClick(e) {
        console.log(Math.round(e.latlng.lat) + ', ' + Math.round(e.latlng.lng));
    }

    map.on('click', onMapClick);
}
