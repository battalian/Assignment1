/**
 * Created by chavaharish on 27-08-2017.
 */
var express = require('express');
var body_parser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var fs = require('fs');

var app = express();


var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.set('view engine', 'pug');
app.set('form', './views');

app.use("/", body_parser.urlencoded( {extended:false} ) );

app.use('/assets', express.static(__dirname + '/public') );

app.use(morgan('combined'));

app.get('/form', function (req, res, next) {
    res.render('index');
});

app.post('/goVal', function (req, res, next) {
    console.log(req.body);
    var curr= new Date().getTime();
    var bd =  Date.parse(req.body.bday).toString();
    var daysLived = (curr-bd)/(1000*24*60*60);
    res.send('hey '+ req.body.name + ' you have lived on this planet for ' + daysLived + ' days');

});
//
// morgan('combined', {
//     skip: function (req, res) { return res.statusCode < 400 }
// });

app.listen(3000);