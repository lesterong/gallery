import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="content">
      <h1>gallery.</h1>
      <p>Hello there! I'm Lester — a student, a software engineer, and a hobbyist photographer.</p>
      <p>
        This website serves to bring together my passion in both software development and photography. I'm still in the
        process of building this site. For now, you can find me on my&nbsp;
        <a href="https://www.lesterong.com">personal website</a>
        &nbsp;and my&nbsp;
        <a href="https://github.com/lesterong" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </motion.div>
  );
};

export default Home;
