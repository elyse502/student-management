import type { ReactElement } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";
import { getStudents } from "../../utils/localStorage";
import { getStudentsByCourse } from "../../features/students/selectors";

const courseThemes: Record<
  string,
  {
    gradient: string;
    stripe: string;
    badge: string;
    dot: string;
    back: string;
    iconBg: string;
    icon: ReactElement;
  }
> = {
  Math: {
    gradient:
      "from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
    stripe: "from-violet-500 to-purple-600",
    badge:
      "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800",
    dot: "bg-violet-500",
    back: "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200",
    iconBg:
      "bg-violet-100 dark:bg-violet-900 border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-300",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  Science: {
    gradient:
      "from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950",
    stripe: "from-emerald-500 to-teal-600",
    badge:
      "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
    dot: "bg-emerald-500",
    back: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200",
    iconBg:
      "bg-emerald-100 dark:bg-emerald-900 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-300",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  English: {
    gradient: "from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950",
    stripe: "from-sky-500 to-blue-600",
    badge:
      "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
    dot: "bg-sky-500",
    back: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
    iconBg:
      "bg-sky-100 dark:bg-sky-900 border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-300",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  History: {
    gradient:
      "from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950",
    stripe: "from-amber-500 to-orange-600",
    badge:
      "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    dot: "bg-amber-500",
    back: "text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200",
    iconBg:
      "bg-amber-100 dark:bg-amber-900 border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-300",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
};

const defaultTheme = {
  gradient:
    "from-indigo-50 to-violet-50 dark:from-indigo-950 dark:to-violet-950",
  stripe: "from-indigo-500 to-violet-600",
  badge:
    "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  dot: "bg-indigo-500",
  back: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200",
  iconBg:
    "bg-indigo-100 dark:bg-indigo-900 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300",
  icon: (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const CourseDetailsPage = () => {
  const { courseName } = useParams();
  const course = COURSES.find((c) => c.name === courseName);

  // ── Not found ──────────────────────────────────────────────────────
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 px-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <p className="text-base font-semibold text-gray-900 dark:text-white">
            Course not found
          </p>
          <Link
            to="/course"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const students = getStudents();
  const enrolled = getStudentsByCourse(students, course.name);
  const theme = courseThemes[course.name] ?? defaultTheme;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 transition-colors duration-300 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* ── Back link ── */}
        <Link
          to="/course"
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-150 ${theme.back}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Courses
        </Link>

        {/* ── Hero card ── */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-xl dark:shadow-indigo-950 overflow-hidden">
          {/* Gradient top stripe */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${theme.stripe}`} />

          {/* Tinted header section */}
          <div
            className={`px-8 py-7 bg-gradient-to-br ${theme.gradient} border-b border-slate-100 dark:border-gray-800`}
          >
            <div className="flex items-start gap-4">
              {/* Icon badge */}
              <div
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${theme.iconBg}`}
              >
                {theme.icon}
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                {/* Portal badge */}
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-gray-900 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-slate-200 dark:border-gray-700 text-slate-500 dark:text-slate-400 shadow-sm">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse inline-block`}
                  />
                  Student Portal
                </span>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {course.name}
                </h1>

                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${theme.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                  Course
                </span>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
                  {course.description}
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="px-8 py-5 flex items-center gap-8 border-b border-slate-100 dark:border-gray-800">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Enrolled
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {enrolled.length}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                student{enrolled.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="h-10 w-px bg-slate-100 dark:bg-gray-800" />

            <div className="space-y-0.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Status
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                Active
              </span>
            </div>

            <div className="ml-auto">
              <Link
                to="/register"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150 active:scale-95 ${theme.badge} hover:opacity-80`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Enroll Student
              </Link>
            </div>
          </div>

          {/* ── Students list ── */}
          <div className="px-8 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                Enrolled Students
              </h2>
              {enrolled.length > 0 && (
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${theme.badge}`}
                >
                  {enrolled.length}
                </span>
              )}
            </div>

            {enrolled.length === 0 ? (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-14 space-y-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-slate-400 dark:text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    No students enrolled
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Be the first to enroll in {course.name}
                  </p>
                </div>
                <Link
                  to="/register"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-150 active:scale-95 ${theme.badge} hover:opacity-80`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Enroll First Student
                </Link>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {enrolled.map((s) => (
                  <div
                    key={s.id}
                    className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 dark:border-gray-800 bg-slate-50 dark:bg-gray-800 hover:border-slate-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-150"
                  >
                    {/* Avatar initial */}
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center text-sm font-bold shrink-0 ${theme.iconBg}`}
                    >
                      {s.fullName.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0 space-y-0.5">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {s.fullName}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                        <svg
                          className="w-3 h-3 shrink-0"
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
                        {s.email}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <svg
                          className="w-3 h-3 shrink-0"
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
                        {s.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
