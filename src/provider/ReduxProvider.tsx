"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ReduxProvider;
