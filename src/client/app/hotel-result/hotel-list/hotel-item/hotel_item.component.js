(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelItem',{
            controller : InfoController,
            bindings: {
                hotel: '<'
            },
            templateUrl:"hotel-result/hotel-list/hotel-item/hotel_item.html"
        });

    InfoController.$inject = [];

    function InfoController(){
        this.$onInit = function () {
            console.log(this)
        };

        this.ponerEstrellas = function () {
            let estrellas = "";
            for (let i = 0; i < Number(this.hotel.stars); i++) {
                estrellas = estrellas + ' = ';
            }
            return estrellas;
        };

        this.getIcon = function(key){
            let icons = {
                wifi: 'class amt-internet',
                sp : 'class amt-spa',
                tel: 'class amt-phone'

            }
            return icons[key];
        }
    }
})();