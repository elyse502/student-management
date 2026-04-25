import { useParams, Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";
import { getStudents } from "../../utils/localStorage";
import { getStudentsByCourse } from "../../features/students/selectors";

const CourseDetailsPage = () => {
  const { courseName } = useParams();

  const course = COURSES.find((c) => c.name === courseName);

  if (!course) {
    return <div>Course not found</div>;
  }

  const students = getStudents();
  const enrolled = getStudentsByCourse(students, course.name);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">{course.name}</h1>
      <p>{course.description}</p>

      <div>
        <h2 className="font-semibold">Enrolled Students</h2>

        {enrolled.length === 0 ? (
          <p className="text-gray-500">No students enrolled</p>
        ) : (
          <div className="space-y-2">
            {enrolled.map((s) => (
              <div
                key={s.id}
                className="p-3 border rounded dark:border-gray-700"
              >
                <p className="font-medium">{s.fullName}</p>
                <p className="text-sm">{s.email}</p>
                <p className="text-sm">{s.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link to="/course" className="text-blue-500">
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetailsPage;
