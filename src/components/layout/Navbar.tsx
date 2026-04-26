import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const base = "px-3 py-2 rounded-lg text-sm font-medium transition";

  const active = "bg-blue-600 text-white";

  const inactive =
    "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <h1 className="text-lg font-bold">SMS</h1>

          <div className="flex gap-2">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Register
            </NavLink>

            <NavLink
              to="/students"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Students
            </NavLink>

            <NavLink
              to="/course"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Courses
            </NavLink>
          </div>
        </div>

        {/* Right */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
