'use strict';

const Search = () => {
    const parent = $('<div class="search"></div>');
    const container = $('<div class="container-fluid"></div>');
    const row = $('<div class="row"></div>');
    const col = $('<div class="col-xs-12 col-sm-12 col-md-12"></div>');
    const inputGroup = $('<div class="input-group"></div>');
    const inputBtn = $('<span class="input-group-btn"></span');
    const button = $('<button class="btn btn-default border-none" type="button"><span class="fa fa-search"></span></button>');
    const input = $('<input type="text" class="form-control" placeholder="Ingresa el distrito a buscar">');

    inputBtn.append(button);
    inputGroup.append(inputBtn);
    inputGroup.append(input);
    col.append(inputGroup);
    row.append(col);
    container.append(row);
    parent.append(container);

    return parent;
}