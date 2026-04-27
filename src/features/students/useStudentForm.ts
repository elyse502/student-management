import { useEffect, useState } from "react";
import { type StudentDraft } from "../../types/student";
import { validateStudent, type Errors } from "./validation";
import { saveDraft, getDraft } from "../../utils/localStorage";

const initialState: StudentDraft = {
  fullName: "",
  email: "",
  phone: "",
  course: "" as any,
};

export const useStudentForm = () => {
  const [form, setForm] = useState<StudentDraft>(initialState);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const draft = getDraft();
    if (draft) setForm(draft);
  }, []);

  useEffect(() => {
    saveDraft(form);
    setErrors(validateStudent(form));
  }, [form]);

  const handleChange = (key: keyof StudentDraft, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isValid = Object.keys(errors).length === 0;

  return {
    form,
    errors,
    handleChange,
    isValid,
  };
};
