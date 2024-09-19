const http = require('http');
const url = require('url');

const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        return 'Number of students: 0';
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const totalStudents = `Number of students: ${students.length}`;
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      let result = `${totalStudents}\n`;
      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const count = fields[field].length;
          const names = fields[field].join(', ');
          result += `Number of students in ${field}: ${count}. List: ${names}\n`;
        }
      }

      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  if (reqUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const database = process.argv[2] || 'database.csv';
    countStudents(database)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
