var express = require("express");
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 8080;


//------static directory--------------
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//----------routes-----------------
require("./routes/emailRoute.js")(app);


//----------port check---------------
app.listen(port, function(req, res) {
    console.log("Server is running on port: ", port);
});
