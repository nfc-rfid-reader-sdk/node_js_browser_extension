var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var express = require('express');
var app = express();

var http = require('http');
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

http.createServer(function(req, res) {
    switch(req.url)
    {
      case "/public/css/styles.css" :
        fs.readFile('./public/css/styles.css', function (err, data) {
          //if (err) {
          //    throw err;
          //  }
          res.writeHeader(200, {"Content-Type": "text/css"});
          res.write(data);
          res.end();
        });
        break;
      case "/helper.js" :
        fs.readFile('./public/js/helper.js', function (err, data) {
          //if (err) {
          //    throw err;
          //  }
          res.writeHeader(200, {"Content-Type": "text/javascript"});
          res.write(data);
          res.end();
        });
        break;
      default :
      fs.readFile('./public/index.html', function (err, data) {
        //if (err) {
        //  console.log(err.message);
        //    throw err;
        //  }
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
      });
    }
}).listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});

















/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/