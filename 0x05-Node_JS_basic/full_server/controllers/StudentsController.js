import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const dbFilename = process.argv[2];
      const students = await readDatabase(dbFilename);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      res.status(200).send(`This is the list of our students\n${fields.map((field) => {
        const count = students[field].length;
        const names = students[field].join(', ');
        return `Number of students in ${field}: ${count}. List: ${names}`;
      }).join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const dbFilename = process.argv[2];
      const students = await readDatabase(dbFilename);
      const studentsInMajor = students[major] || [];
      const names = studentsInMajor.join(', ');

      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
