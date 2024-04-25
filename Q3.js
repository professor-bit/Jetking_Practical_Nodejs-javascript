const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Extract the requested file path from the URL
  const filePath = path.join(__dirname, req.url);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // If the file doesn't exist, send a 404 response
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
    } else {
      // If the file exists, read its content and send it in the response
      fs.readFile(filePath, (err, data) => {
        if (err) {
          // If there's an error reading the file, send a 500 response
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('500 Internal Server Error');
        } else {
          // Send the file content in the response
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(data);
        }
      });
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
