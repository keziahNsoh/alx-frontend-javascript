// Function that returns the sum of all student ids from a list of students
export default function getStudentIdsSum(students) {
  // Use reduce to accumulate the sum of ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
