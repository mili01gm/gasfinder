'use strict';

//Completar la lista de estaciones de la busqueda
const SearchItem = (data, update) => {
    const item = $('<div class="item"></div');
    const name = $('<h5>' + data.name + '</h5>');
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
        state.selectedStation = data;
        update();
    });

    return item;
}


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

    state.stations.forEach(station => {
        list.append(SearchItem(station, update));
    });

    parent.append(list);

    input.on("keyup", (e) => {
        e.preventDefault();
        const filtered = filterByDistrict(state.stations, $(e.currentTarget).val());
        reRun(list, filtered, update);
    });

    return parent;
}

const reRun = (list, filtered, update) => {
    list.empty();
    console.log(filtered);

    filtered.forEach(station => {
        list.append(SearchItem(station, update));
    });
}