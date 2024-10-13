import LayoutAuth from "@/logic/services/auth/layout/LayoutAuth/LayoutAuth";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { Children, ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ReduxProvider>
        <LayoutAuth>{children}</LayoutAuth>
      </ReduxProvider>
    </div>
  );
};

export default layout;
