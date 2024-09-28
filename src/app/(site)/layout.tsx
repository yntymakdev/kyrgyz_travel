import LayoutClient from "@/logic/services/clients/layout/LayoutClient/LayoutClient";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ReduxProvider>
        <LayoutClient>{children}</LayoutClient>
      </ReduxProvider>
    </div>
  );
};

export default layout;
