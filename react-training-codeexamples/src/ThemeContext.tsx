import React, { ReactNode, useContext, useEffect, useState } from "react";

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {}
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext
      value={{
        isDark: isDark,
        toggleTheme: () => {
          setDark(!isDark);
        }
      }}
    >
      {children}
    </ThemeContext>
  );
};

export const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='flex justify-center'>
      <p className='dark:text-white'>Darkmode? </p>
      <div
        className={`flex items-center p-1 px-0.5 h-6 w-12 border-2 border-black rounded-full transition-all cursor-pointer ${
          isDark ? "border-white bg-white" : ""
        }`}
        onClick={() => toggleTheme()}
      >
        <span className={`rounded-full bg-black h-4 w-4 transition-all ${isDark ? "translate-x-6" : ""}`}></span>
      </div>
    </div>
  );
};
