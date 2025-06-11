const http = require('http');
const fs = require('fs');

const countStudents = require('./3-read_file_async');

const DB_FILE = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    countStudents(DB_FILE)
      .then(() => {
        fs.readFile(DB_FILE, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const lines = data
            .split('\n')
            .filter((line) => line.trim() !== '');
          const students = lines.slice(1);
          const fieldGroups = {};
          let total = 0;

          for (const line of students) {
            const parts = line.split(',');
            const firstName = parts[0].trim();
            const field = parts[3].trim();

            if (!fieldGroups[field]) {
              fieldGroups[field] = [];
            }
            fieldGroups[field].push(firstName);
            total += 1;
          }

          res.write(`Number of students: ${total}\n`);
          for (const [field, names] of Object.entries(fieldGroups)) {
            res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
          }
          res.end();
        });
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, 'localhost');

module.exports = app;
