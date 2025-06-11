const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      if (lines.length < 2) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const students = lines.slice(1); // Skip the header
      const fieldGroups = {};
      let totalStudents = 0;

      for (const line of students) {
        const parts = line.split(',');
        const firstName = parts[0].trim();
        const field = parts[3].trim();

        if (!fieldGroups[field]) {
          fieldGroups[field] = [];
        }
        fieldGroups[field].push(firstName);
        totalStudents += 1;
      }

      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(fieldGroups)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
};
