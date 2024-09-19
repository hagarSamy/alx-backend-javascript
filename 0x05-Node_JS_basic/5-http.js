const http = require('http');
const countStudents = require('./2-read_file');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end('');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const result = countStudents(process.argv[2]);
      res.write(result);
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
