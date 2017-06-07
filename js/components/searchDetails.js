'use strict';

const StationDetail = (update) => {
    const infoStation = $('<div class="info"></div>');
    const name = $('<h5>' + state.selectedStation.name + '</h5>');
    const adress = $('<p>' + state.selectedStation.address + '</p>');
    const listProduct = $('<div class="listProduct"></div>');
    const back = $('<a href="#"></a>');
    const iconBack = $('<i class="fa fa-chevron-left"></i>');

    state.selectedStation.products.forEach((e) => {
        const product = $('<div class="product">' + elem + '</div>');
        listProduct.append(product);
    });

}