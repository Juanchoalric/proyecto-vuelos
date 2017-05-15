(function() {
    'use strict';

    angular
        .module('hotel_filter')
        .component('filter',{
          //controller: controllerFilters,
            bindings: {
                filters: '<'
            },
            templateUrl:"hotel-result/filter/filter.html"
        });

        // function controllerFilters(){
        //   this.$onInit = function(){
        //     console.log(this.filters);
        //   }
        //
        //
        // }
})();
