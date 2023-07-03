export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const gradObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = !gradObj ? 'N/A' : gradObj.grade;
      return { ...student, grade };
    });
}
