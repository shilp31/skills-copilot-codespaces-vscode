// Create web server that listens to port 3000
// And serves the comments.html file

// Load the http module
var http = require('http');
var fs = require('fs');

// Create a web server
http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);

console.log('Server running on port 3000');
// Run the server with node comments.js
// Open a browser and navigate to localhost:3000
// You should see the comments.html file displayed in the browser
