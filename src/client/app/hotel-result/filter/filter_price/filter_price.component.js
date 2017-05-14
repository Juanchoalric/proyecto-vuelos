(function() {
    'use strict';

    angular
        .module('filterPrice')
        .component('filterPrice',{
            controller :filterPriceController,
            bindings: {
              filters: '<'
            },
            templateUrl:"hotel-result/filter/filter_price/filter_price.html"
        }).filter('filterPrice',function () {
        return function (hotels,price) {
            return hotels.filter(function (hotel) {
                return (hotel.price >= price.priceMin && hotel.price <= price.priceMax);
            })
        };
      });

    function filterPriceController(){
      let self = this;
      self.sliderPrice = {
         options: {
           noSwitching: true,
           pushRange: true,
           onChange: this.filterPrice
      }
    };
  }
})();
