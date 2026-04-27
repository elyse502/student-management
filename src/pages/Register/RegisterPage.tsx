import { useNavigate } from "react-router-dom";
import { useStudentForm } from "../../features/students/useStudentForm";

const RegisterPage = () => {
  const { form, errors, handleChange, isValid } = useStudentForm();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!isValid) return;
    navigate("/confirmation");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-6 border dark:border-gray-700">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Register Student</h1>
          <p className="text-sm text-gray-500">Fill in the details below</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Full Name</label>
            <input
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="John Doe"
              className={`w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@email.com"
              className={`w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="078XXXXXXX"
              className={`w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Course */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Course</label>
            <select
              value={form.course}
              onChange={(e) => handleChange("course", e.target.value)}
              className={`w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 ${
                errors.course
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
            >
              <option value="">Select course</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
            </select>
            {errors.course && (
              <p className="text-xs text-red-500">{errors.course}</p>
            )}
          </div>
        </div>

        {/* Action */}
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="w-full py-3 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Review Student
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
