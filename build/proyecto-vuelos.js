(function () {
    'use strict';

    angular
        .module('app', [
            'hotel_result',
            'slider'
        ]);

})();

(function(){
    'use strict';

    angular
        .module('filterBuscador', []);
})();

(function(){
    'use strict';

    angular
        .module('filterPrice', ["rzModule"]);
})();

(function(){
    'use strict';

    angular
        .module('filterStar', []);
})();

(function(){
    'use strict';

    angular
        .module('hotel_filter', [
          "filterBuscador",
          "filterStar",
          "filterPrice"
        ]);
})();

(function(){
    'use strict';

    angular
        .module('hotel_result', ['hotel_filter']);
})();

(function (){
    'use strict';

    angular
        .module("slider", []);
})();

(function(){angular.module('hotel_result').run(['$templateCache', function($templateCache) {$templateCache.put('hotel-result/hotel_result.html','<header></header><div class="breadcrumb-ctn"></div><section class="search-ctn"><p>Hoteles disponibles para:</p><section class="search-info"><span> <i aria-hidden="true" class="fa fa-search">Madrid &nbsp</i></span><span> <i aria-hidden="true" class="fa fa-calendar">16/11/2017 &nbsp</i></span><span> <i aria-hidden="true" class="fa fa-calendar">30/11/2017 &nbsp</i></span><span> <i aria-hidden="true" class="fa fa-user">2 hu\xE9spedes &nbsp</i></span><a href="#" class="modificar">Modificar b\xFAsqueda</a></section></section><section class="filter-ctn"><filter filters="$ctrl.filters"></filter></section><section class="hotel-ctn"><hotel-list hotels="$ctrl.hotels" filters="$ctrl.filters"></hotel-list></section><div class="clear"></div>');
$templateCache.put('slider/slider.html','<div class="slider"><ul class="item-ctn"><li ng-repeat="slide in $ctrl.items track by $index"><div ng-style="{\'background-image\':\'url({{$ctrl.items[$ctrl.currentIndex]}})\'}" class="imagenBackground"></div></li></ul><ul class="nav-ctn"><li ng-click="$ctrl.prev()" class="next">&laquo;</li><li ng-click="$ctrl.next()" class="prev">&raquo;  </li></ul></div>');
$templateCache.put('hotel-result/filter/filter.html','<div><filter-buscador filters="$ctrl.filters"></filter-buscador></div><div><filter-price filters="$ctrl.filters"></filter-price></div><div><filter-star filters="$ctrl.filters"></filter-star></div>');
$templateCache.put('hotel-result/hotel-list/hotel_list.html','<ul><li ng-repeat="hotel_item in $ctrl.hotels | searchFilter:($ctrl.filters.nombreSearch) | filterPrice:($ctrl.filters.price)  track by $index" class="claster"><hotel_item hotel="hotel_item"></hotel_item></li></ul>');
$templateCache.put('hotel-result/filter/filter_buscador/filter_buscador.html','<div class="buscador"> <div ng-init="collapseSearch = false" ng-click="collapseSearch = !collapseSearch"><p class="buscar-info"><i aria-hidden="true" class="fa fa fa-search">Buscar hotel<span class="fa fa-caret-up"></span></i></p></div><section ng-show="!collapseSearch" class="filter-search-ctn"><input rz-slider-model="$ctrl.filters.price.priceMin" rz-slider-high="$ctrl.filters.price.priceMax" rz-slider-options="$ctrl.sliderPrice.options" placeholder="Ingrese el nombre del hotel"><button ng-click="$ctrl.filterSearch()" type="button">Aceptar</button></section></div>');
$templateCache.put('hotel-result/filter/filter_price/filter_price.html','<div ng-init="collapsePrice = false" ng-click="collapsePrice = !collapsePrice" class="filter_price"><p class="precio-range">$ precio<span class="fa fa-caret-up"></span></p><section ng-show="!collapsePrice" class="filter-search-ctn"><rzslider rz-slider-model="$ctrl.filters.price.priceMin" rz-slider-high="$ctrl.filters.price.priceMax" rz-slider-options="$ctrl.sliderPrice.options"></rzslider></section></div>');
$templateCache.put('hotel-result/filter/filter_star/filter_star.html','<section class="section-stars"><div ng-init="collapseStar = false" ng-click="collapseStar = !collapseStar"><p><i aria-hidden="true" class="fa fa fa-star">Estrellas<span class="fa fa-caret-up"></span></i></p></div><section ng-show="!collapseStar"><ul><li><input type="checkbox" name="vehicle" value="Bike"><i>Todas las estellas</i></li><li><input type="checkbox" name="vehicle" value="Bike"><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i></li><li><input type="checkbox" name="vehicle" value="Bike"><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i></li><li><input type="checkbox" name="vehicle" value="Bike"><i aria-hidden="true" class="fa fa fa-star"></i><i aria-hidden="true" class="fa fa fa-star"></i></li><li><input type="checkbox" name="vehicle" value="Bike"><i aria-hidden="true" class="fa fa fa-star"></i></li></ul></section></section>');
$templateCache.put('hotel-result/hotel-list/hotel-item/hotel_item.html','<!--Created by juancho on 10/04/17.\n--><div><div class="contenedor"><ul class="imagen"><li class="secundario"><slider items="$ctrl.hotel.images"></slider></li><li class="secundario"></li></ul><ul class="descripcion"><li class="titulo">{{$ctrl.hotel.name}}</li><li ng-repeat="estrella in $ctrl.ponerEstrellas()" class="estrellas"><i aria-hidden="true" class="fa fa fa-star"></i></li><li class="habitacion">Solo habitacion</li><ul><li ng-repeat="(key, value) in $ctrl.hotel.amenities" ng-class="$ctrl.getIcon(key)" class="amenities"></li></ul><li class="secundario"></li></ul><ul class="precio"><li class="descripcion_precio">Precio por noche por habitacion</li><li class="contenedor_precio"><span class="ars">ARS</span><div class="precio_argentina">{{$ctrl.hotel.price}}</div></li><li class="impuestos">impuestos y tasas no incluido</li><li class="more"><button>Ver hotel</button></li><li class="pago">Pag\xE1 en cuotas</li><li class="pago">Pag\xE1 en destino</li></ul></div></div>');}]);})();
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

(function(){
    angular
        .module('hotel_result')
        .component('hotelResult',{
            controller: ResultHotelController,
            templateUrl:'hotel-result/hotel_result.html'
        });
        // function ResultlistController(){
        //   console.log(this.hotels);
        // }
        ResultHotelController.$inject = ["dataservice"];

        function ResultHotelController(dataservice){
          let self = this;
          self.hotels = [];
           //console.log(this.hotels);
            dataservice.serviceFunction().then((data) => {
              //console.log(data);
              self.hotels = data.data;
            })
            .catch((error) =>{
              console.log(error);
            })
            this.filters = {
            "name": "",
            "nombreSearch": "",
            "price": {
                "priceMin": "0",
                "priceMax": "4000",
            },
              "stars":[],
              "checkStar":[true,false,false,false,false,false],
              "cantStars": ["1","2","3","4","5"],
              "cantHotels": ["7","1","1","2","2","1"]
          }


            }

})();

angular
    .module('app')
    .factory('dataservice', dataservice);

function dataservice($http) {
    let service = {
        serviceFunction: serviceFunction
    };
    return service;
    ////////////
    function serviceFunction() {
        return $http.get('/hotels');
        //     .then(serviceComplete)
        //     .catch(serviceFailed);
        //
        // function serviceComplete(response) {
        //     return response.data.results;
        // }
        // function serviceFailed(error) {
        //     console.error('XHR Failed for service.' + error.data);
        // }
    }
}

(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelList',{
          controller: ResultlistController,
          bindings: {
              hotels: '<',
              filters:'<'
          },
            templateUrl:"hotel-result/hotel-list/hotel_list.html"
        });

            function ResultlistController(){
            }
            // ResultlistController.$inject = ["dataservice"];
            //
            // function ResultlistController(dataservice){
            //   this.hotels = [];
            //    //console.log(this.hotels);
            //     dataservice.serviceFunction().then((data) => {
            //       console.log(data);
            //       this.hotels = data;
            //       console.log(this.hotels);
            //     })
            //     .catch((error) =>{
            //       console.log(error);
            //     })
            // }
})();

(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelItem',{
            controller :InfoController,
            bindings: {
                hotel: '<'
            },
            templateUrl:"hotel-result/hotel-list/hotel-item/hotel_item.html"
        });

    function InfoController(){


        this.ponerEstrellas = function () {
            let estrellas = [];
            for (let i = 0; i < Number(this.hotel.stars); i++) {
                estrellas.push(i);
            }
            return estrellas;
        };

        this.getIcon = function(key){
            let icons = {
                wifi: 'class amt-internet',
                sp : 'class amt-spa',
                tel: 'class amt-phone'

            };
            return icons[key];
        }
    }
})();

(function (){
    'use strict';
    angular
        .module('slider')
        .component('slider', {
            controller:sliderController,
            bindings: {
                items: '<'
            },
            templateUrl: "slider/slider.html"
        });
    function sliderController(){

        this.currentIndex = 0;

        this.prev = function(){
            if(this.currentIndex === 0)
                return this.currentIndex = this.items.length -1;
            this.currentIndex--;
        };

        this.next = function(){
            if(this.currentIndex === this.items.length -1)
                return this.currentIndex = 0;
            this.currentIndex++;
        };
    };

})();
