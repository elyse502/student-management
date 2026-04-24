import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CoursesPage from "./pages/Course/CoursesPage";
import CourseDetailsPage from "./pages/Course/CourseDetailsPage";
import RegisterPage from "./pages/Register/RegisterPage";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/confirmation" element={<div>Confirmation</div>} />
        <Route path="/students" element={<div>Students</div>} />

        <Route path="/course" element={<CoursesPage />} />
        <Route path="/course/:courseName" element={<CourseDetailsPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
