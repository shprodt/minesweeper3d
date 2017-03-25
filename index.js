var express = require('express');
var app = express();
//var cookieParser = require('cookie-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var MongoClient = require('mongodb').MongoClient;


app.use(require('express').static(__dirname+'/public/'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

});

http.listen(8000, function () {
    console.log('listening on ' + 8000);
});





//process.stdin.setEncoding('utf8');
//
//process.stdin.on('readable', function () {
//    var chunk = process.stdin.read();
//        io.to('room1').emit('test');
//});//


//MongoClient.connect(url, function(err, db) {
//    db.collection('NewColl').insertOne({"socket.id":socket.id});
//    db.close();
//MongoClient.connect(url, function(err, db) {
//    console.log(db.collection('NewColl').find());
//    db.close();