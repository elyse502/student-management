const DRAFT_KEY = "studentDraft";

export const saveDraft = (data: unknown) => {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
};

export const getDraft = () => {
  const data = localStorage.getItem(DRAFT_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearDraft = () => {
  localStorage.removeItem(DRAFT_KEY);
};

const STUDENTS_KEY = "registeredStudents";

export const getStudents = () => {
  const data = localStorage.getItem(STUDENTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveStudent = (student: unknown) => {
  const students = getStudents();
  localStorage.setItem(STUDENTS_KEY, JSON.stringify([...students, student]));
};
