var express = require("express");
var routes = require("./routes");
var logfmt = require("logfmt");
var app = express();
var sendgrid  = require('sendgrid')(
  'app21385780@heroku.com',
  'harz9ury'
);

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
  sendgrid.send({
    to: 'weavermjw@googlemail.com',
    from: 'sender@example.com',
    subject: 'Hello World',
    text: 'Sending email with NodeJS through SendGrid!'
  }, function(err, json) {
  if (err) { return console.error(err); }
    console.log(json);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
