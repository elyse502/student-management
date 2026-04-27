import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CoursesPage from "./pages/Course/CoursesPage";
import CourseDetailsPage from "./pages/Course/CourseDetailsPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ConfirmationPage from "./pages/Confirmation/ConfirmationPage";
import StudentsPage from "./pages/Students/StudentsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/students" element={<StudentsPage />} />

        <Route path="/course" element={<CoursesPage />} />
        <Route path="/course/:courseName" element={<CourseDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
