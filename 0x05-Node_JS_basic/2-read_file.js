const fs = require('fs');

/**
 * Count and display the number of students and their distribution by field.
 * @param {string} path - Path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data by lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    // Extract headers and students' information
    const [header, ...students] = lines;
    const headers = header.split(',');
    const fieldIndex = headers.indexOf('field');
    const firstnameIndex = headers.indexOf('firstname');

    if (fieldIndex === -1 || firstnameIndex === -1) {
      throw new Error('CSV header must include "field" and "firstname" columns');
    }

    // Create an object to store field-wise student data
    const fieldData = {};

    // Process each student record
    students.forEach(student => {
      const [ , firstname, , field] = student.split(',');

      if (field in fieldData) {
        fieldData[field].push(firstname);
      } else {
        fieldData[field] = [firstname];
      }
    });

    // Output the total number of students
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    // Output the number of students in each field and their names
    for (const [field, names] of Object.entries(fieldData)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (err) {
    // Handle file read errors
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

