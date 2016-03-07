var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.json({ lat: 89.52, lon: 39.225});
});

app.get('/maplocation', function(req, res) {
	res.json({ lat: 89.52, lon: 39.225});
});

app.listen(80, function() {
	console.log('Server running on port 3000');
});