/**
 * Created by sebastiandebin on 31/03/17.
 */
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require('mongoose');
/*//Connect to database
mongoose.connect("mongodb://localhost");
//Get the default connection
const db = mongoose.connection;*/

app.use('/static', express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/hotels', require('./hotels/hotel_route') );

//App Routes
app.use('/', function (req, res, next){
  res.sendFile(path.join(__dirname + "/../../build/index.html"));
});



app.listen(PORT, ()=>{
   console.log("Server running on " + PORT);
});
