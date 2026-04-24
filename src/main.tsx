import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./features/theme/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </ThemeProvider>,
);
