import { createContext, createSignal } from 'solid-js';
import type { ParentComponent } from 'solid-js';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: () => Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider: ParentComponent = (props) => {
  const [theme, setTheme] = createSignal<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.documentElement.classList.toggle('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}; 