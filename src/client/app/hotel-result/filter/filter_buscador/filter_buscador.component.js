(function() {
    'use strict';

    angular
        .module('filterBuscador')
        .component('filterBuscador',{
            controller :filterBuscadorController,
            bindings: {

            },
            templateUrl:"hotel-result/filter/filter_buscador/filter_buscador.html"
        });

    function filterBuscadorController(){
        console.log("hola");
    }
})();
