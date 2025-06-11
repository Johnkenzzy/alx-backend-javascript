const express = require('express');
const fs = require('fs');

const app = express();
const DB_FILE = process.argv[2];

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  let responseText = 'This is the list of our students\n';

  try {
    const lines = fs
      .readFileSync(DB_FILE, 'utf8')
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

    responseText += `Number of students: ${total}\n`;
    for (const [field, names] of Object.entries(fieldGroups)) {
      responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    res.send(responseText);
  } catch (err) {
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
