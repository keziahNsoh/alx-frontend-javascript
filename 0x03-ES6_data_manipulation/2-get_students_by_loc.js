// Function that returns an array of students located in a specific city
export default function getStudentsByLocation(students, city) {
  // Filter students based on their location
  return students.filter((student) => student.location === city);
}
