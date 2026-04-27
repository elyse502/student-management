import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  {
    to: "/register",
    label: "Register",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
    ),
  },
  {
    to: "/students",
    label: "Students",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
        />
      </svg>
    ),
  },
  {
    to: "/course",
    label: "Courses",
    icon: (
      <svg
        className="w-4 h-4"
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
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-950"
        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
    }`;

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
      isActive
        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-950"
        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-700 shadow-sm dark:shadow-gray-950">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* ── Logo ── */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 flex items-center justify-center shadow-sm">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
              SMS
            </span>
            <span className="hidden sm:block text-xs text-slate-400 dark:text-slate-500 font-medium leading-none">
              Student Portal
            </span>
          </div>
        </div>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map(({ to, label, icon }) => (
            <NavLink key={to} to={to} className={desktopLink}>
              {icon}
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 transition-all duration-150 active:scale-95"
          >
            {open ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-1 space-y-1 border-t border-slate-100 dark:border-gray-800">
          {links.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleClose}
              className={mobileLink}
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
