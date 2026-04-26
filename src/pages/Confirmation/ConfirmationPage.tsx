import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getDraft, clearDraft, saveStudent } from "../../utils/localStorage";

const isValidDraft = (draft: any) => {
  return draft && draft.fullName && draft.email && draft.phone && draft.course;
};

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<any>(null);

  useEffect(() => {
    const data = getDraft();

    if (!isValidDraft(data)) {
      clearDraft(); // prevent future issues
      toast.error("No valid draft found");
      navigate("/register");
      return;
    }

    setDraft(data);
  }, [navigate]);

  if (!draft) return null;

  const handleConfirm = () => {
    const student = {
      ...draft,
      id: crypto.randomUUID(),
    };

    saveStudent(student);
    clearDraft();

    toast.success(`Student ${student.fullName} registered`);
    navigate("/students");
  };

  const handleEdit = () => {
    navigate("/register");
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold">Confirm Student</h1>

      <div className="p-4 border rounded dark:border-gray-700 space-y-2">
        <p>
          <strong>Name:</strong> {draft.fullName}
        </p>
        <p>
          <strong>Email:</strong> {draft.email}
        </p>
        <p>
          <strong>Phone:</strong> {draft.phone}
        </p>
        <p>
          <strong>Course:</strong> {draft.course}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleConfirm}
          className="flex-1 p-2 bg-green-500 text-white rounded"
        >
          Confirm Registration
        </button>

        <button
          onClick={handleEdit}
          className="flex-1 p-2 bg-gray-400 text-white rounded"
        >
          Edit Information
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
