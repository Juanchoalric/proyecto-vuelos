(function() {
    'use strict';

    angular
        .module('filterStar')
        .component('filterStar',{
            controller :FilterStarController,
            bindings: {
              filters: '<'
            },
            templateUrl:"hotel-result/filter/filter_star/filter_star.html"
        });
        function FilterStarController(){

        }
})();
