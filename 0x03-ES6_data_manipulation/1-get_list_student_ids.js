// Function that returns an array of student ids from an array of student objects
// import getListStudents from './0-get_list_students'; // Remove if not used

export default function getListStudentIds(students) { // Added space before parentheses
  // Check if the input is an array; return an empty array if not
  if (!Array.isArray(students)) {
    return [];
  }
  // Map the array to extract ids
  return students.map((student) => student.id);
}
