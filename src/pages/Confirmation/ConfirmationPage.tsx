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
      clearDraft();
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
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-6 border dark:border-gray-700">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold">Confirm Details</h1>
          <p className="text-sm text-gray-500">
            Review before final submission
          </p>
        </div>

        {/* Data Preview */}
        <div className="rounded-lg border dark:border-gray-700 divide-y dark:divide-gray-700">
          <div className="flex justify-between p-4">
            <span className="text-gray-500">Full Name</span>
            <span className="font-medium">{draft.fullName}</span>
          </div>

          <div className="flex justify-between p-4">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{draft.email}</span>
          </div>

          <div className="flex justify-between p-4">
            <span className="text-gray-500">Phone</span>
            <span className="font-medium">{draft.phone}</span>
          </div>

          <div className="flex justify-between p-4">
            <span className="text-gray-500">Course</span>
            <span className="font-medium">{draft.course}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition"
          >
            Confirm Registration
          </button>

          <button
            onClick={handleEdit}
            className="flex-1 py-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Edit Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
