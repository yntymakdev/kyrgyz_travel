import React, { ReactNode } from "react";
import Header from "../../pages/Header/Header";
import Footer from "../../pages/Footer/Footer";

const LayoutClient = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutClient;
