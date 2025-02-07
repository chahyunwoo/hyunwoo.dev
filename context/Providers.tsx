"use client";

import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

import { store } from "@/store";

interface IProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>;
    </Provider>
  );
}
