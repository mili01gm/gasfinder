'use strict';

const initMap = (master) => {
    const map = new GMaps({
        use: 'master',
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long
    });

    map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        zoom: 12
    });

    GMaps.geolocate({
        success: function(position) {
            map.setCenter(position.coords.latitude, position.coords.longitude);
            zoom: 12;

            map.addMarker({
                lat: state.selectedStation.lat,
                lng: state.selectedStation.long,
            });
        }
    });
}

const gasMap = () => {
    const divMap = $('<div id="map"></div>');
    divMap.init = init.bind(null, divMap.get(0));
    return divMap;
};