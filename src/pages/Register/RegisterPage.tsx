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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 px-4 py-12 transition-colors duration-300">
      {/* Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-2xl dark:shadow-indigo-950 overflow-hidden">
        {/* Top accent stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

        <div className="p-8 space-y-7">
          {/* Header */}
          <div className="space-y-1.5 text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              Student Portal
            </span>

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Register Student
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fill in the details below to get started
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-indigo-500" />
            <span className="h-1.5 w-3 rounded-full bg-slate-200 dark:bg-gray-700" />
            <span className="h-1.5 w-3 rounded-full bg-slate-200 dark:bg-gray-700" />
          </div>

          {/* Form fields */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Full Name
              </label>
              <input
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-all duration-200 outline-none focus:ring-2 shadow-sm ${
                  errors.fullName
                    ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-800 bg-red-50 dark:bg-red-950"
                    : "border-slate-200 dark:border-gray-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:border-indigo-400 dark:focus:border-indigo-600"
                }`}
              />
              {errors.fullName && (
                <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 font-medium">
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Address
              </label>
              <input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@email.com"
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-all duration-200 outline-none focus:ring-2 shadow-sm ${
                  errors.email
                    ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-800 bg-red-50 dark:bg-red-950"
                    : "border-slate-200 dark:border-gray-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:border-indigo-400 dark:focus:border-indigo-600"
                }`}
              />
              {errors.email && (
                <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 font-medium">
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Phone Number
              </label>
              <input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="078XXXXXXX"
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-all duration-200 outline-none focus:ring-2 shadow-sm ${
                  errors.phone
                    ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-800 bg-red-50 dark:bg-red-950"
                    : "border-slate-200 dark:border-gray-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:border-indigo-400 dark:focus:border-indigo-600"
                }`}
              />
              {errors.phone && (
                <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 font-medium">
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Course */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Course
              </label>
              <select
                value={form.course}
                onChange={(e) => handleChange("course", e.target.value)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium bg-slate-50 dark:bg-gray-800 text-gray-900 dark:text-white border transition-all duration-200 outline-none focus:ring-2 shadow-sm cursor-pointer ${
                  errors.course
                    ? "border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-800 bg-red-50 dark:bg-red-950"
                    : "border-slate-200 dark:border-gray-700 focus:ring-indigo-300 dark:focus:ring-indigo-800 focus:border-indigo-400 dark:focus:border-indigo-600"
                }`}
              >
                <option value="">Select course</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>
              {errors.course && (
                <p className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 font-medium">
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.course}
                </p>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
              Review
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:via-violet-500 hover:to-indigo-500 shadow-lg shadow-indigo-200 dark:shadow-indigo-950 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none active:scale-95"
          >
            Review Student
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-disabled:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {/* Footer note */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            Your information is{" "}
            <span className="text-indigo-500 dark:text-indigo-400 font-medium">
              encrypted & secure
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
