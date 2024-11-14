import React, { createContext, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleDarkMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};