const http = require('http');  // Import the HTTP module

// Define the server's port and host
const PORT = 1245;
const HOST = 'localhost';

// Create the HTTP server
const app = http.createServer();

// Set up an event listener for handling incoming requests
app.on('request', (_, res) => {
  // The response text to be sent to the client
  const responseText = 'Hello Holberton School!';

  // Set the response headers to inform the client of the content type and length
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the HTTP status code for the response to indicate a successful request
  res.statusCode = 200;

  // Write the response text to the client
  res.write(Buffer.from(responseText));
});

// Start the server and listen for incoming connections on the defined host and port
app.listen(PORT, HOST, () => {
  // Log a message to the console when the server starts successfully
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app module to make it available for other files
module.exports = app;
