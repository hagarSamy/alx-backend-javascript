export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name(newName);
    this._length = length(newLen);
    this._students = students(newStudents);
  }

  // getters for each atteibute
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters for each attr
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName.trim();
    }
  }

  set length(newLen) {
    if (typeof newLen !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = newLen;
    }
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array');
    }
    for (const student of newStudents) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
    this._students = newStudents;
  }
}
