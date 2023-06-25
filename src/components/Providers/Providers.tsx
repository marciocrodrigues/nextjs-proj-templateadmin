"use client";
import { AppProvider } from "@/data/context/AppContext";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default Providers;
