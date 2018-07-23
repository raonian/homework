var express = require('express');
// var http = require('http');
// var url = require('url');
// var fs = require('fs');
var path = require('path');
var app = express();
app.use(express.static('./build'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

var server = app.listen(3000, function() {
    console.log('http://localhost:3000');
});