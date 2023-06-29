export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be array');
    }
    this._students = students;
  }

  get length() {
    return this._length;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be a array');
    }
    value.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    });
    this._students = value;
  }
}
