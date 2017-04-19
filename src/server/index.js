/**
 * Created by sebastiandebin on 31/03/17.
 */
const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const path = require("path");


app.use('/static', express.static('./build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// App Routes
app.use('/', function (req, res, next){
  res.sendFile(path.join(__dirname + "/../../build/index.html"));
});

app.listen(PORT, ()=>{
   console.log("Server running on " + PORT);
});
