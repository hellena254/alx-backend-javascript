export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
        .filter(student => student.location === city)
        .map(student => {
            const foundGrade = newGrades.find(grade => grade.studentId === student.id);
            if (foundGrade) {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    location: student.location,
                    grade: foundGrade.grade
                };
            } else {
                return {
                    id: student.id,
                    firstName: student.firstName,
                    location: student.location,
                    grade: 'N/A'
                };
            }
        });
}
