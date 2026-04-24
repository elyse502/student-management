import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className="min-h-screen bg-white text-black">{children}</div>;
};

export default MainLayout;
