'use strict';

const filterByDistrict = (stations, query) => {
    if (stations) {
        stations.filter(e => {
            if (e.district.toLowerCase().indexOf(query) != -1) {
                console.log(e);
                return e;

            }
        });
    }
}