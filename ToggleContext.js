import React, { useContext, useState } from "react";

const DarkThemeContext = React.createContext();
const UpdateDarkThemeContext = React.createContext();

export function useTheme() {
  return useContext(DarkThemeContext);
}
export function useUpdateTheme() {
  return useContext(UpdateDarkThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function updateTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <UpdateDarkThemeContext.Provider value={updateTheme}>
        {children}
      </UpdateDarkThemeContext.Provider>
    </DarkThemeContext.Provider>
  );
}
