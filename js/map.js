
const map = L.map('map', {
    crs: L.CRS.Simple
});

function loadMap(file, size) {
    const bounds = [[0, 0], size];

    L.imageOverlay(file, bounds).addTo(map);

    map.fitBounds(bounds);
    function onMapClick(e) {
        console.log("You clicked the map at " + e.latlng);
    }

    map.on('click', onMapClick);
}
