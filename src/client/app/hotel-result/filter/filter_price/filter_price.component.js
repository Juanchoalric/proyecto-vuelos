(function() {
    'use strict';

    angular
        .module('filterPrice')
        .component('filterPrice',{
            controller :filterPriceController,
            bindings: {

            },
            templateUrl:"hotel-result/filter/filter_price/filter_price.html"
        });

    function filterPriceController(){
      let slider = {
        min: 100,
        max: 180,
        options: {
          floor: 0,
          ceil: 450
        }
      };
    }
})();
