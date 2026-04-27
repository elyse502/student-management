import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getDraft, clearDraft, saveStudent } from "../../utils/localStorage";

const isValidDraft = (draft: any) => {
  return draft && draft.fullName && draft.email && draft.phone && draft.course;
};

const fields = [
  {
    key: "fullName",
    label: "Full Name",
    icon: (
      <svg
        className="w-4 h-4 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    key: "email",
    label: "Email Address",
    icon: (
      <svg
        className="w-4 h-4 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    key: "phone",
    label: "Phone Number",
    icon: (
      <svg
        className="w-4 h-4 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    key: "course",
    label: "Course",
    icon: (
      <svg
        className="w-4 h-4 text-indigo-500"
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
    const student = { ...draft, id: crypto.randomUUID() };
    saveStudent(student);
    clearDraft();
    toast.success(`Student ${student.fullName} registered`);
    navigate("/students");
  };

  const handleEdit = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 px-4 py-12 transition-colors duration-300">
      {/* Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-2xl dark:shadow-indigo-950 overflow-hidden">
        {/* Top accent stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />

        <div className="p-8 space-y-7">
          {/* Header */}
          <div className="text-center space-y-1.5">
            {/* Check icon badge */}
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-indigo-500 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              Step 2 of 3
            </span>

            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Confirm Details
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Review your information before final submission
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-3 rounded-full bg-indigo-300 dark:bg-indigo-700" />
            <span className="h-1.5 w-8 rounded-full bg-indigo-500" />
            <span className="h-1.5 w-3 rounded-full bg-slate-200 dark:bg-gray-700" />
          </div>

          {/* Data preview */}
          <div className="rounded-xl border border-slate-200 dark:border-gray-700 overflow-hidden shadow-sm divide-y divide-slate-100 dark:divide-gray-700">
            {fields.map(({ key, label, icon }) => (
              <div
                key={key}
                className="flex items-center justify-between px-4 py-3.5 bg-white dark:bg-gray-900 hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors duration-150"
              >
                <span className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {icon}
                  {label}
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white max-w-xs truncate text-right">
                  {draft[key]}
                </span>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div className="flex items-start gap-2.5 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-3">
            <svg
              className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5"
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
            <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
              Please double-check your details. Once confirmed, the student
              record will be saved and cannot be edited from this page.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
              Actions
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Confirm */}
            <button
              onClick={handleConfirm}
              className="group flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-200 dark:shadow-emerald-950 transition-all duration-200 active:scale-95"
            >
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Confirm Registration
            </button>

            {/* Edit */}
            <button
              onClick={handleEdit}
              className="group flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-700 shadow-sm transition-all duration-200 active:scale-95"
            >
              <svg
                className="w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit Information
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            Your information is{" "}
            <span className="text-indigo-500 dark:text-indigo-400 font-medium">
              encrypted & secure
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
