var express = require('express');
var app = express();
var http = require('http');

var appRoot = '/app';


//Routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + appRoot + '/index.html');
});

app.get('/bower_components/*', function (req, res) {
  	res.sendFile(__dirname + appRoot + req.originalUrl);
});

app.get('/rest/*', function (req, res) {
	console.log(req.originalUrl);
  	var url = "http://slalomdevopsworkflow-zuul.cfapps.io" + req.originalUrl.replace('rest/', '');

      http.get(url, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
        	res.send(body);
        }).on('error', function(e) {
        	console.log(e);
        });
    });
});

app.get('*.css', function (req, res) {
  	res.sendFile(__dirname + appRoot + req.originalUrl);
});

app.get('*.js', function (req, res) {
  	res.sendFile(__dirname + appRoot + req.originalUrl);
});

app.get('*.json', function (req, res) {
  	res.sendFile(__dirname + appRoot + req.originalUrl);
});


//Server setup
app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});