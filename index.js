var http = require('http');
var os = require("os");


http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});

res.write('Hello from <br>');
res.write(os.hostname() + '<br>');

res.end();

}).listen(80);
console.log("Listening to Port 80");
