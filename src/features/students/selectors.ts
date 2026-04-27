/*export const getStudentsByCourse = (students: any[], course: string) => {
  return students.filter((s) => s.course === course);
};*/

// Small Improvement - Making selector stricter with types
import { type Student } from "../../types/student";

export const getStudentsByCourse = (students: Student[], course: string) => {
  return students.filter((s) => s.course === course);
};
