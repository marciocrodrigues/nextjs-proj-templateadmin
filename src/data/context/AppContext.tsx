import { useTheme } from "next-themes";
import { createContext } from "react";

type Tema = "dark" | "light";

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const { setTheme, theme } = useTheme();

  function alternarTema() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <AppContext.Provider
      value={{
        tema: theme,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
