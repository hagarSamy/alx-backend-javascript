const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        return 'Number of students: 0\n';
      }
      const students = lines.slice(1).map((line) => line.split(','));
      let output = `Number of students: ${students.length}\n`;

      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const field in fields) {
        if (field) {
          const count = fields[field].length;
          const names = fields[field].join(', ');
          output += `Number of students in ${field}: ${count}. List: ${names}\n`;
        }
      }
      return output;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}


const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    // res.write('This is the list of our students\n');
    try {
      const result = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
