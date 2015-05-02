
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var messages = [];

app.use(bodyParser());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/', function(req, res) {
  res.send(JSON.stringify(messages));
});

app.post('/', function(req, res) {
  console.log(req.body);
  messages.push(req.body);
  res.send(JSON.stringify(messages))
})


app.listen(9000);



















// var messages = [{message:'hello'}];

// http = require('http');
// http.createServer(function(req, res) {
//   if (req.method === 'GET') {
//     res.writeHead(200, {
//       'Connection': 'close',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     });
//     res.end(JSON.stringify(messages));
//   }
//   if (req.method === 'POST') {
//     var postData = '';
//     req.on('data', function(chunk) {
//       postData += chunk.toString();
//     });
//     req.on('end', function() {
//       console.log(JSON.parse(postData));
//       var msg = JSON.parse(postData);
//       messages.push(msg);
//       res.writeHead(200, {
//         'Connection': 'close',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       });
//       res.end(JSON.stringify(messages));
//     });
//   }
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200, {
//         'Connection': 'close',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//       });
//     res.end("{}");
//   }
// }).listen(9000);


///MyCode Here


// var http = require("http");

// var messages = ["Hello World!"];

// var onRequest = function(req, res) {
//   if (req.method === 'GET') {
//     res.writeHead(200, {
//       'Connection': 'close',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     });
//     res.end(JSON.stringify({message: messages}));
//   } 
//   if (req.method == 'POST') {
//     res.writeHead(200, {
//       'Connection': 'close',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     });
//     var postData = '';
//     req.on('data', function(chunk) {
//       postData += chunk.toString();
//     });
//     req.on('end', function() {
//       if (!postData) {
//         res.end("no string sent with request")
//       } 
//       else {
//         console.log("Got POST data:");
//         console.log(JSON.parse(postData));
//         messages.push(JSON.parse(postData));
//         res.end(JSON.stringify("POST data recieved " + messages));
//       }
//     });
//   }
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200, {
//       'Connection': 'close',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     });
//     res.end("{}");
//   }
// };


// //--Server--//
// var server = http.createServer(onRequest);
// server.listen(9000, function() {
//     console.log('Listening on port' + 9000);
// });
