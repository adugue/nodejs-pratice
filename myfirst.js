var http = require('http');
var dt = require('./myfirstmodule');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime() + "<br><br>");
  res.end('Hello Sir!');
}).listen(8080);