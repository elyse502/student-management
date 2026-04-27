import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../../features/students/courseData";

const courseThemes: Record<
  string,
  {
    gradient: string;
    badge: string;
    dot: string;
    link: string;
    icon: ReactElement;
  }
> = {
  Math: {
    gradient: "from-violet-500 to-purple-600",
    badge:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800",
    dot: "bg-violet-500",
    link: "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200",
    icon: (
      <svg
        className="w-5 h-5"
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
    gradient: "from-emerald-500 to-teal-600",
    badge:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
    dot: "bg-emerald-500",
    link: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200",
    icon: (
      <svg
        className="w-5 h-5"
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
    gradient: "from-sky-500 to-blue-600",
    badge:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
    dot: "bg-sky-500",
    link: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
    icon: (
      <svg
        className="w-5 h-5"
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
    gradient: "from-amber-500 to-orange-600",
    badge:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
    dot: "bg-amber-500",
    link: "text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200",
    icon: (
      <svg
        className="w-5 h-5"
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
  gradient: "from-indigo-500 to-violet-600",
  badge:
    "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  dot: "bg-indigo-500",
  link: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200",
  icon: (
    <svg
      className="w-5 h-5"
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

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 transition-colors duration-300 px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* ── Header ── */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse inline-block" />
            Student Portal
          </span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Available Courses
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Browse all available courses and explore their details
          </p>
        </div>

        {/* ── Course count pill ── */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {COURSES.length} course{COURSES.length !== 1 ? "s" : ""} available
            </span>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {COURSES.map((course) => {
            const theme = courseThemes[course.name] ?? defaultTheme;

            return (
              <div
                key={course.name}
                className="group bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-md hover:shadow-xl dark:shadow-indigo-950 dark:hover:shadow-indigo-900 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Coloured top stripe */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${theme.gradient}`}
                />

                <div className="p-6 flex flex-col flex-1 space-y-4">
                  {/* Icon + name row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Icon badge */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${theme.badge}`}
                      >
                        {theme.icon}
                      </div>

                      <div>
                        <h2 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                          {course.name}
                        </h2>
                        <span
                          className={`inline-flex items-center gap-1 mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold border ${theme.badge}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${theme.dot}`}
                          />
                          Course
                        </span>
                      </div>
                    </div>

                    {/* Arrow icon — appears on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 mt-1">
                      <svg
                        className={`w-4 h-4 ${theme.link}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100 dark:bg-gray-800" />

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                    {course.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-1">
                    <Link
                      to={`/course/${course.name}`}
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-all duration-150 group-hover:gap-2.5 ${theme.link}`}
                    >
                      View Details
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
                    </Link>

                    <Link
                      to="/register"
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-150 ${theme.badge} hover:opacity-80 active:scale-95`}
                    >
                      + Enroll
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Empty state ── */}
        {COURSES.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-400 dark:text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="text-center space-y-1">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                No courses available
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Check back later for new courses
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
