import { useTheme } from "../../features/theme/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button onClick={toggleTheme} className="flex items-center gap-2">
      <span className="text-sm">{isDark ? "🌙" : "☀️"}</span>

      <div className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition">
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
