(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelList',{
            bindings: {
                hotels: '<'
            },
            templateUrl:"hotel-result/hotel-list/hotel_list.html"
        });
})();