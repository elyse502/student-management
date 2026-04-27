import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>

        <p className="text-gray-500">Page not found</p>

        <Link
          to="/register"
          className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go to Register
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
