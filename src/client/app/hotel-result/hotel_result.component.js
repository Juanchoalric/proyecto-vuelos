(function(){
    angular
        .module('hotel_result')
        .component('hotelResult',{
            controller: ResultHotelController,
            require:{

            },

            templateUrl:'hotel-result/hotel_result.html'
        });
        // function ResultlistController(){
        //   console.log(this.hotels);
        // }
        ResultHotelController.$inject = ["dataservice"];

        function ResultHotelController(dataservice){
          this.hotels = [];
           //console.log(this.hotels);
            dataservice.serviceFunction().then((data) => {
              //console.log(data);
              this.hotels = data.data;
            })
            .catch((error) =>{
              console.log(error);
            })
        }

})();


// (function () {
//     'use strict';
//
//     angular
//         .module('hotel_result')
//         .component('hotelResult', {
//             controller: ResultHotelController,
//             templateUrl: "hotel-result/hotel_result.html"
//         });
//
//     ResultHotelController.$inject = ['dataservice'];
//
//     function ResultHotelController(dataservice) {
//
//       dataservice.serviceFunction().then(function(data){
//                 console.log(data);
//                 this.hotels = data || {};
//                 console.log(this.hotel);
//               })
//               .catch(function(error){
//                 console.log(error);
//               })
//     }
// })();
