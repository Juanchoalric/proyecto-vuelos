(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelItem',{
            controller : function () {
                this.$onInit = function (){
                    console.log(this)}

                this.ponerEstrellas = function () {
                    let estrellas = "";
                    for (let i = 0; i<Number(this.hotel.stars); i++){
                        estrellas = estrellas +' = ';
                    }
                    return estrellas;
                }
            },
            bindings: {
                hotel: '<'
            },
            templateUrl:"hotel-result/hotel-list/hotel-item/hotel_item.html"
        });
})();