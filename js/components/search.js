'use strict';

//Completar la lista de estaciones de la busqueda
const SearchItem = (data, stations) => {
    const item = $('<div class="item"></div');
    const name = $('<h6>' + data.name + '</h6>');
    const adress = $('<p>' + data.address + '</p>');
    const district = $('<p>' + data.district + '</p>');
    const link = $('<a href="#"></a>');
    const iconMap = $('<i class="fa fa-map"></i>');

    link.append(iconMap);
    item.append(name);
    item.append(adress);
    item.append(district);
    item.append(link);

    link.on("click", (e) => {
        e.preventDefault();
        state.selectedStation = station;
        update();
    });

    return item;
}


// const reRender = (stationsList, filtered) => {
//     stationsList.empty();

//     filtered.forEach(station => {
//         stationsList.append(SearchItem(station, update));

//     });
// }


//el input con el espacio para la lista
const Search = (update) => {
    const parent = $('<div class="search"></div>');
    const container = $('<div class="container-fluid bg-red"></div>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12 col-sm-12 col-md-12"></div>');
    const inputGroup = $('<div class="input-group"></div>');
    const inputBtn = $('<span class="input-group-btn"></span');
    const button = $('<button class="btn btn-default border-none" type="button"><span class="fa fa-search"></span></button>');
    const input = $('<input type="text" class="form-control" placeholder="Ingresa el distrito a buscar">');
    const hr = $('<hr>');
    const list = $('<div class="list"></div>');


    inputBtn.append(button);
    inputGroup.append(inputBtn);
    inputGroup.append(input);
    col.append(inputGroup);
    row.append(col);
    container.append(row);
    parent.append(container);
    parent.append(hr);
    parent.append(list);

    //to add each station to the list
    state.stations.forEach(station => {
        list.append(SearchItem(station, update));
    });

    input.on('keyup', (e) => { //keyup para que filtre por tecla
        if (input.val() != "") {
            var selectedStations = filterByDistrict(state.stations, input.val());
        }
        // reRender(list, selectedStations, update);
    });

    return parent;
}