import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../../utils/localStorage";

export const useStudents = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleDelete = (id: string) => {
    deleteStudent(id);
    setStudents(getStudents());
  };

  const filtered = students.filter((s) =>
    s.fullName.toLowerCase().includes(search.toLowerCase()),
  );

  const summary = {
    total: students.length,
    byCourse: students.reduce((acc: any, s: any) => {
      acc[s.course] = (acc[s.course] || 0) + 1;
      return acc;
    }, {}),
  };

  return {
    students: filtered,
    rawStudents: students,
    search,
    setSearch,
    handleDelete,
    summary,
  };
};
