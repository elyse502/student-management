import { type Student } from "../../types/student";

export const getStudentsByCourse = (students: Student[], course: string) => {
  return students.filter((s) => s.course === course);
};
