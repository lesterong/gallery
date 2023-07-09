import Page from '../components/Page.tsx';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Page>
      <h1 style={{ display: 'flex' }}>
        {"hello, gallery.".split("").map((char, index) => {
          if (char === " ") {
            return <div key={index}>&nbsp;</div>
          } else {
            return <motion.div whileHover={{ y: -8 }} key={index}>{char}</motion.div>;
          }
        })}
      </h1>
      Coming Soon.
    </Page>
  );
};

export default HomePage;
