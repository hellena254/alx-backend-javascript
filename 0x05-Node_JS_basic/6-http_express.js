const express = require('express');

const app = express();
const PORT = 1245;

// Define a route for the root
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// start the server and listen on the port
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

module.exports = app;
