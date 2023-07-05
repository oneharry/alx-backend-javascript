import Teacher from "../main";

interface Directors extends Teacher {
    numberOfReports: number;
}
interface printTeacherFun {
    (fName: string, lName: string): string;
}
const printTeacher: printTeacherFun = (fName, lName) => {
    return `${fName.substring(0, 1)}. ${lName}`;
}

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName
    }
}