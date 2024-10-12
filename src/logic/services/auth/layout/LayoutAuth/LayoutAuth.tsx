import React, { ReactNode } from "react";
import s from "./LayoutAuth.module.scss";
const LayoutAuth = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className={s.LayoutPage}>{children}</div>;
    </div>
  );
};

export default LayoutAuth;
