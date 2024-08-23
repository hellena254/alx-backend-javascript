const http = require('http')

// create a HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

// make server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/')
});

module.exports = app;
