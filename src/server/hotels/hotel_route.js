const Router = require("co-router");
const router = Router();
const controller = require('./hotel_controller');

router.get('/', controller.getHotels);

module.exports = router;
