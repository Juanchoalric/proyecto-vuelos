class HotelService
{
    static getHotels(){

        const _self = this;

        _self.hotels =
            [{
                "_id": {"$oid": "58cb47efe3dcd6c694f67533"},
                "name": "Hotel Emperador",
                "stars": "3",
                "price": 1596.0,
                "images": [
                    "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                    "https://placehold.it/350x230",
                    "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
                ],
                "amenities": {
                    "wifi": "wifi",
                    "sp": "spa"
                }
            },
                {
                    "_id": {"$oid": "58cb47efe3dcd6c694f67534"},
                    "name": "Petit Palace San Bernardo", "stars": "4",
                    "price": 2145.0,
                    "images": ["http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                },

                {
                    "_id": {"$oid": "58cb47efe3dcd6c694f67535"},
                    "name": "Hotel Nuevo Boston", "stars": "2", "price": 861.0,
                    "images": ["http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                },
                {
                    "_id": {"$oid": "58cb47efe3dcd6c694f67536"},
                    "name": "Aquarius Casino Resort",
                    "stars": "1", "price": 450.0,
                    "images": [
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                },
                {
                    "_id": {
                        "$oid": "58cb47efe3dcd6c694f67537"
                    },
                    "name": "The Orleans Hotel and Casino",
                    "stars": "5",
                    "price": 3250.0,
                    "images": ["http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                },
                {
                    "_id": {"$oid": "58cb47efe3dcd6c694f67538"},
                    "name": "Aquarius Casino Resort",
                    "stars": "3", "price": 1350.0,
                    "images": [
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                },
                {
                    "_id": {"$oid": "58cb47efe3dcd6c694f67539"}
                    , "name": "Sheraton Dallas Hotel",
                    "stars": "4", "price": 3000.0,
                    "images": [
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952",
                        "http://placehold.it/150/92c952"],
                    "amenities": {
                        "wifi": "wifi",
                        "sp": "spa"
                    }
                }
            ];

        return new Promise(function (resolve, reject) {
            resolve(_self.hotels)
        })
    }
}

module.exports = HotelService;
