import { Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";

const CoursesPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">Courses</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {COURSES.map((course) => (
          <div
            key={course.name}
            className="p-4 border rounded dark:border-gray-700"
          >
            <h2 className="font-semibold">{course.name}</h2>
            <p className="text-sm">{course.description}</p>

            <Link
              to={`/course/${course.name}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
