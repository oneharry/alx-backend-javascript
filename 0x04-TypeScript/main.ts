interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'Grace',
    lastName: 'John',
    age: 23,
    location: 'Lagos',
}

const student2: Student = {
    firstName: 'Kelvin',
    lastName: 'Cece',
    age: 19,
    location: 'Abuja',
}

const students: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

students.forEach((student) => {
    const row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1)
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
})