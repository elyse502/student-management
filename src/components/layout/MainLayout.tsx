import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1 p-4">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
