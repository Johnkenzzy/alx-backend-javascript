// Returns an array of students for a specific city with their new grade.

export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students
    .filter((student) => student.location === String(city))
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: foundGrade ? foundGrade.grade : 'N/A',
      };
    });
}
