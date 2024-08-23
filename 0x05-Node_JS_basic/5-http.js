const http = require('http'); // Import the HTTP module
const fs = require('fs'); // Import the file system module

const PORT = 1245; // Define the server port
const HOST = 'localhost'; // Define the server host
const databaseFilePath = process.argv.length > 2 ? process.argv[2] : ''; // Get the database file path from command line arguments

// Create an HTTP server instance
const app = http.createServer();

/**
 * Asynchronously reads a CSV file and counts the students per field.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise<String>} A promise that resolves to the formatted string of student data.
 */
const getStudentData = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database')); // Reject if no file path is provided
  }

  // Read the CSV file asynchronously
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database')); // Reject if there is an error reading the file
    } else {
      const report = [];
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Split file content by line and filter out empty lines
      const studentGroups = {};
      const header = lines[0].split(','); // Get the header fields
      const studentAttributes = header.slice(0, header.length - 1);

      for (const line of lines.slice(1)) {
        const record = line.split(',');
        const field = record[record.length - 1];
        const studentInfo = studentAttributes.reduce((acc, attr, index) => {
          acc[attr] = record[index];
          return acc;
        }, {});

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(studentInfo);
      }

      const totalStudents = Object.values(studentGroups).reduce((total, group) => total + group.length, 0);
      report.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        report.push(`Number of students in ${field}: ${group.length}. List: ${group.map(student => student.firstname).join(', ')}`);
      }
      resolve(report.join('\n')); // Resolve with the formatted student data
    }
  });
});

// Define route handlers for the server
const routeHandlers = {
  '/': (req, res) => {
    const responseMessage = 'Hello Holberton School!';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(responseMessage); // Respond with a plain text message
  },
  '/students': (req, res) => {
    const responseMessage = ['This is the list of our students'];

    // Get student data from the CSV file
    getStudentData(databaseFilePath)
      .then((report) => {
        responseMessage.push(report);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseMessage.join('\n')); // Respond with the student data
      })
      .catch((err) => {
        responseMessage.push(err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(responseMessage.join('\n')); // Respond with an error message if any
      });
  },
};

// Handle incoming requests
app.on('request', (req, res) => {
  if (routeHandlers[req.url]) {
    routeHandlers[req.url](req, res); // Use the appropriate route handler based on the request URL
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found'); // Respond with a 404 if no matching route is found
  }
});

// Start the server and listen on the specified host and port
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app; // Export the server instance
