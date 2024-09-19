const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end('');
  }
  
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const result = countStudents(process.argv[2]) || 'database.csv';
      countStudents(result)
        .then((data) => {
          res.end(`This is the list of our students\n${data}`);
        })
        .catch(error => {
          res.write('Cannot load the database');
        });
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
