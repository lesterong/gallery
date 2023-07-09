import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme)
  useEffect(() => {
    if (localStorage.getItem('theme') !== 'dark' && localStorage.getItem('theme') !== 'light') {
      if (matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
    document.documentElement.setAttribute('data-theme', localStorage.theme);
    setTheme(localStorage.theme)
  }, []);

  const handleThemeToggle = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    document.documentElement.setAttribute('data-theme', localStorage.theme);
    setTheme(localStorage.theme)
  };


  return (
    <button onClick={handleThemeToggle}>{theme}</button>
  );
};

export default ThemeToggle;
