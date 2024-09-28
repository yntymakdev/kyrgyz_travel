import LayoutAuth from "@/logic/services/auth/layout/LayoutAuth/LayoutAuth";
import React, { Children, ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <LayoutAuth>{children}</LayoutAuth>
    </div>
  );
};

export default layout;
