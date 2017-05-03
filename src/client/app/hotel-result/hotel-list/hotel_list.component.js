(function() {
    'use strict';

    angular
        .module('hotel_result')
        .component('hotelList',{
          controller: ResultlistController,
          bindings: {
              hotels: '<'
          },
            templateUrl:"hotel-result/hotel-list/hotel_list.html"
        });

            function ResultlistController(){
              console.log(this.hotels);
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
