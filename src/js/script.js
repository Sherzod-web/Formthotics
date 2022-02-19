import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

$(document).ready(function () {
    $('.icon-menu').click(function (event) {
        $('.icon-menu,.header__menu').toggleClass('menu-open');
        $('body').toggleClass('lock');
    });
});