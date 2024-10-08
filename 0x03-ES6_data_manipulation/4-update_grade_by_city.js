// Function that returns students from a specific city with their new grades
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    // Filter students by location
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade for each student
      const grade = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        // Assign the found grade or 'N/A' if not found
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
