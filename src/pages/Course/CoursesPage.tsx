import { Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";

const CoursesPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-bold">Courses</h1>
        <p className="text-sm text-gray-500">
          Browse available courses and explore details
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => (
          <div
            key={course.name}
            className="group p-5 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            {/* Content */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{course.name}</h2>

              <p className="text-sm text-gray-500">{course.description}</p>
            </div>

            {/* Action */}
            <Link
              to={`/course/${course.name}`}
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
