import { type StudentDraft } from "../../types/student";

export type Errors = Partial<Record<keyof StudentDraft, string>>;

export const validateStudent = (data: StudentDraft): Errors => {
  const errors: Errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.email = "Invalid email format";
  }

  if (!data.phone.match(/^\d+$/)) {
    errors.phone = "Digits only";
  }

  if (!data.course) {
    errors.course = "Select a course";
  }

  return errors;
};
