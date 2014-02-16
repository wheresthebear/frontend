var express = require("express"),
    routes = require("./routes"),
    logfmt = require("logfmt"),
    app = express(),
    expressValidator = require('express-validator');

app.use(logfmt.requestLogger());
app.use(express.urlencoded());
app.use(expressValidator()); 

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

app.post('/contact', routes.contactPost);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
