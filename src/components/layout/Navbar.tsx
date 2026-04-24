import { Link } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b dark:border-gray-700">
      <div className="flex gap-4">
        <Link to="/register">Register</Link>
        <Link to="/students">Students</Link>
        <Link to="/course">Courses</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
