import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

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

  const draw = {
    hidden: { pathLength: 0.3, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 0.25, bounce: 0 },
      }
    }
  };

  const controls = useAnimationControls();

  return (
    <motion.svg
      style={{ rotate: "180deg" }}
      onClick={() => {
        setTimeout(handleThemeToggle, 100)
        controls.start('hidden').then(() => {
          void controls.start('visible');
        });
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      initial="visible"
      animate={controls}
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <motion.path
        variants={draw}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </motion.svg>
  );
};

export default ThemeToggle;
