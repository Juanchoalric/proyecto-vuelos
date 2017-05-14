(function() {
    'use strict';

    angular
        .module('filterBuscador')
        .component('filterBuscador',{
          controller: controllerFiltersBuscador,
            bindings:{
              filters: '<'
            },
            templateUrl:"hotel-result/filter/filter_buscador/filter_buscador.html"
        }).filter('searchFilter', function () {
            var _self = this;
            return function (hotels, nombreSearch) {
                return hotels.filter(function (hotel) {
                    return hotel.name.toLowerCase().indexOf(nombreSearch.toLowerCase()) != -1;
                })
            }
          })

          function controllerFiltersBuscador(){
            this.$onInit = function(){
              console.log(this.filters);
            }


          }

})();
