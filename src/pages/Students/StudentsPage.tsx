import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useStudents } from "../../features/students/useStudents";

const StudentsPage = () => {
  const { students, search, setSearch, handleDelete, summary } = useStudents();

  const onDelete = (id: string, name: string) => {
    if (!confirm(`Delete ${name}?`)) return;

    handleDelete(id);
    toast.success("Student deleted");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Students</h1>

      {/* Summary */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded dark:border-gray-700">
          <p>Total Students</p>
          <p className="text-2xl font-bold">{summary.total}</p>
        </div>

        <div className="p-4 border rounded dark:border-gray-700">
          <p>By Course</p>
          {Object.entries(summary.byCourse).map(([course, count]) => (
            <p key={course}>
              {course}: {count as number}
            </p>
          ))}
        </div>
      </div>

      {/* Search */}
      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800"
      />

      {/* List */}
      <div className="space-y-2">
        {students.map((s) => (
          <div
            key={s.id}
            className="p-4 border rounded dark:border-gray-700 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{s.fullName}</p>
              <p className="text-sm">{s.email}</p>
              <p className="text-sm">{s.phone}</p>
              <p className="text-sm">{s.course}</p>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/course/${s.course}`}
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                View Course
              </Link>

              <button
                onClick={() => onDelete(s.id, s.fullName)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <p className="text-gray-500">No students found</p>
      )}
    </div>
  );
};

export default StudentsPage;
