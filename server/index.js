var express = require('express');
var path = require('path')
var app = express();

var port = process.env.PORT || 8080;

console.log(path.join(__dirname, '/dist'))
app.use('/', express.static(__dirname + '/dist'));

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
