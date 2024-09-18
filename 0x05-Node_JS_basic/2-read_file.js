const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  //   lines.shift();
  const students = lines.slice(1).filter((line) => line !== '');
  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const columns = student.split(',');
    const lastField = columns[columns.length - 1];
    if (!fields[lastField]) {
      fields[lastField] = [];
    }
    fields[lastField].push(columns[0]);
  }

  for (const lastField in fields) {
    if (lastField) {
      const count = fields[lastField].length;
      const names = fields[lastField].join(', ');
      console.log(`Number of students in ${lastField}: ${count}. List: ${names}`);
    }
  }
}

module.exports = countStudents;
