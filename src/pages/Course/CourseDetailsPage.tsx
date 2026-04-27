import { useParams, Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";
import { getStudents } from "../../utils/localStorage";
import { getStudentsByCourse } from "../../features/students/selectors";

const CourseDetailsPage = () => {
  const { courseName } = useParams();

  const course = COURSES.find((c) => c.name === courseName);

  if (!course) {
    return (
      <div className="text-center py-10 text-gray-500">Course not found</div>
    );
  }

  const students = getStudents();
  const enrolled = getStudentsByCourse(students, course.name);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{course.name}</h1>
        <span className="inline-block px-3 py-1 text-xs rounded bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          {course.name}
        </span>
        <p className="text-gray-500">{course.description}</p>
      </div>

      {/* Stats */}
      <div className="p-4 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
        <p className="text-sm text-gray-500">Enrolled Students</p>
        <p className="text-2xl font-bold">{enrolled.length}</p>
      </div>

      {/* Students List */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Students</h2>

        {enrolled.length === 0 ? (
          <div className="text-center py-10 text-gray-500 border rounded-xl dark:border-gray-700">
            No students enrolled in this course
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {enrolled.map((s) => (
              <div
                key={s.id}
                className="p-4 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
              >
                <p className="font-semibold">{s.fullName}</p>
                <p className="text-sm text-gray-500">{s.email}</p>
                <p className="text-sm text-gray-500">{s.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div>
        <Link
          to="/course"
          className="inline-block text-blue-600 hover:underline"
        >
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
