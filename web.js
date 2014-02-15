var express = require("express");
var routes = require("./routes");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());
app.use(express.urlencoded());

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', routes.home);
app.get('/library', routes.library);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

app.post('/contact', function (req, res) {
  console.log('this is:', req.body);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
