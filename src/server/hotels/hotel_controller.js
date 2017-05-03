 'use strict';

 const HotelService = require("./hotel_service");
 class HotelServiceController {
     static getHotels(req, res, next) {
            HotelService.getHotels().then((hotels) => {
                res.json(hotels)
            });
        }
    }

 module.exports = HotelServiceController;
