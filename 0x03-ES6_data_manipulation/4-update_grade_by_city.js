export default function updateStudentGradeByCity(listOfSts, city, grades) {
  return (listOfSts.filter((student) => student.location === city))
    .map((student) => {
      const gradeObj = grades.find((grade) => grade.studentId === student.id);
      if (gradeObj && gradeObj.grade !== student.grade) {
        return { ...student, grade: gradeObj.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
