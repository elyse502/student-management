import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const base = "px-3 py-2 rounded-lg text-sm font-medium transition";

  const active = "bg-blue-600 text-white";

  const inactive =
    "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : inactive}`;

  const handleClose = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold">SMS</h1>

          {/* Desktop links */}
          <div className="hidden md:flex gap-2">
            <NavLink to="/register" className={linkClass}>
              Register
            </NavLink>

            <NavLink to="/students" className={linkClass}>
              Students
            </NavLink>

            <NavLink to="/course" className={linkClass}>
              Courses
            </NavLink>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border dark:border-gray-600"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden px-4 pb-4 space-y-2 border-t dark:border-gray-700 transition-all duration-300 ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <NavLink to="/register" onClick={handleClose} className={linkClass}>
            Register
          </NavLink>

          <NavLink to="/students" onClick={handleClose} className={linkClass}>
            Students
          </NavLink>

          <NavLink to="/course" onClick={handleClose} className={linkClass}>
            Courses
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
