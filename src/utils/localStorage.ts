const DRAFT_KEY = "studentDraft";

export const saveDraft = (data: unknown) => {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
};

export const getDraft = () => {
  const data = localStorage.getItem(DRAFT_KEY);
  return data ? JSON.parse(data) : null;
};

export const clearDraft = () => {
  localStorage.removeItem(DRAFT_KEY);
};
