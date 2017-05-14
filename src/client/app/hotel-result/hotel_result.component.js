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
