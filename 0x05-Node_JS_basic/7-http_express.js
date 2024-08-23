const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

/**
 * Reads and processes student data from a CSV file.
 * @param {string} filePath The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves to a report of student counts.
 */
const generateStudentReport = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    return reject(new Error('Database file path is missing'));
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const lines = data.trim().split('\n');
    if (lines.length <= 1) {
      return resolve('No student data available.');
    }

    const headers = lines[0].split(',');
    const fieldIndex = headers.length - 1;
    const studentsByField = {};

    lines.slice(1).forEach(line => {
      const columns = line.split(',');
      if (columns.length !== headers.length) return;

      const field = columns[fieldIndex];
      const student = headers.slice(0, -1).reduce((acc, header, idx) => {
        acc[header] = columns[idx];
        return acc;
      }, {});

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(student);
    });

    const totalStudents = Object.values(studentsByField).flat().length;
    const report = [`Number of students: ${totalStudents}`];
    for (const [field, students] of Object.entries(studentsByField)) {
      const names = students.map(s => s.firstname).join(', ');
      report.push(`Number of students in ${field}: ${students.length}. List: ${names}`);
    }

    resolve(['This is the list of our students', ...report].join('\n'));
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  generateStudentReport(DB_FILE)
    .then(report => res.send(report))
    .catch(error => res.status(500).send(error.message));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
