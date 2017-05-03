(function() {
    'use strict';

    angular
        .module('filterBuscador')
        .component('filterBuscador',{
            bindToController: true,
            controller :filterBuscadorController,
            require: {
              hotelResult: "^hotelResult"
            },
            bindings: {
              name: '<'
            },
            templateUrl:"hotel-result/filter/filter_buscador/filter_buscador.html"
        });

    function filterBuscadorController($scope){
        let hotels = this.hotelResult.hotels;


    }
})();
