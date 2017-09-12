var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var router = require('./routing/router');           // get an instance of the express Router

var mongoose   = require('mongoose');
mongoose.connect('mongodb://marcus:qwerty1234@ds129434.mlab.com:29434/weight-watcher')
  .then(
    () => { console.log('mongo alive') },
    (err) => { console.error('error', err) }
  );

app.use('/api', router);
app.disable('etag');

app.listen(port);
console.log('Magic happens on port ' + port);
