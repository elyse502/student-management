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
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl font-bold">Students</h1>

        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 p-2 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Summary */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
          <p className="text-sm text-gray-500">Total Students</p>
          <p className="text-3xl font-bold">{summary.total}</p>
        </div>

        <div className="p-5 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm col-span-2">
          <p className="text-sm text-gray-500 mb-2">Students by Course</p>

          <div className="flex flex-wrap gap-3">
            {Object.entries(summary.byCourse).map(([course, count]) => (
              <div
                key={course}
                className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm"
              >
                {course}: {count as number}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {students.map((s) => (
          <div
            key={s.id}
            className="p-4 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            {/* Info */}
            <div className="space-y-1">
              <p className="font-semibold text-lg">{s.fullName}</p>
              <p className="text-sm text-gray-500">{s.email}</p>
              <p className="text-sm text-gray-500">{s.phone}</p>

              <span className="inline-block mt-1 px-2 py-1 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {s.course}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Link
                to={`/course/${s.course}`}
                className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Course
              </Link>

              <button
                onClick={() => onDelete(s.id, s.fullName)}
                className="px-3 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {students.length === 0 && (
        <div className="text-center py-10 text-gray-500">No students found</div>
      )}
    </div>
  );
};

export default StudentsPage;
