'use strict';

const Header = (update) => {
    const header = $('<header class="bg-red"></header>');
    const title = $("<span>Gas Finder</span>");
    const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

    header.append(title);

    return header;
}