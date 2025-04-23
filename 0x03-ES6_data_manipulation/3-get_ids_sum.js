// Returns the sum of all the student ids.

export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.reduce((idSum, student) => idSum + student.id, 0);
}
