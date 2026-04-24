import { useParams, Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";

const CourseDetailsPage = () => {
  const { courseName } = useParams();

  const course = COURSES.find((c) => c.name === courseName);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">{course.name}</h1>
      <p>{course.description}</p>

      {/* Students will be added later */}
      <div className="mt-4">
        <h2 className="font-semibold">Enrolled Students</h2>
        <p className="text-sm text-gray-500">No students yet</p>
      </div>

      <Link to="/course" className="text-blue-500">
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetailsPage;
