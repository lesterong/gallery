import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  useEffect(() => {
    if (localStorage.getItem('theme') !== 'dark' && localStorage.getItem('theme') !== 'light') {
      if (matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }
    document.documentElement.setAttribute('data-theme', localStorage.theme);
  }, []);

  const handleThemeToggle = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    document.documentElement.setAttribute('data-theme', localStorage.theme);
  };


  return (
    <motion.svg
      drag="y"
      dragElastic={0.5}
      dragConstraints={{ top: 0, bottom: 0 }}
      style={{ width: "24px", stroke: "2px", rotate: "180deg" }}
      onDragEnd={(_, info) => {
        if (info.point.y > 58) {
          handleThemeToggle();
        }
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
    </motion.svg>
  );
};

export default ThemeToggle;
