import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/confirmation" element={<div>Confirmation</div>} />
        <Route path="/students" element={<div>Students</div>} />
        <Route path="/course/:courseName" element={<div>Course</div>} />
      </Routes>
    </MainLayout>
  );
};

export default App;
