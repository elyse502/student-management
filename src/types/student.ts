export type CourseName = "Math" | "Science" | "English" | "History";

export type Student = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  course: CourseName;
};

export type StudentDraft = Omit<Student, "id">;
