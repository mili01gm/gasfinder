'use strict';

const filterByDistrict = (stations, query) => {
    if (stations) {
        stations.filter(station => {
            if (station.district.toLowerCase().indexOf(query.toLowerCase()) != -1) {
                console.log(station);
                return station;

            }
        });
    }
}