import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const students = {};

        lines.slice(1).forEach((line) => {
          const values = line.split(',');
          const field = values[headers.indexOf('field')];
          const firstName = values[headers.indexOf('firstname')];

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        });
        resolve(students);
      }
    });
  });
}

export default readDatabase;
