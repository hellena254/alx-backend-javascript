export default function getListStudentIds() {
  if(!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map(student => student.id);
}
