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
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">Register Student</h1>

      <input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800"
      />
      {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <select
        value={form.course}
        onChange={(e) => handleChange("course", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-800"
      >
        <option value="">Select Course</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="English">English</option>
        <option value="History">History</option>
      </select>
      {errors.course && <p className="text-red-500">{errors.course}</p>}

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className="w-full p-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Review Student
      </button>
    </div>
  );
};

export default RegisterPage;
