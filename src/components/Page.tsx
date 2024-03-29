import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './Page.module.scss';

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 8, opacity: 0 }}
      className={styles.container}
    >
      {children}
    </motion.div>
  )
}

export default Page;
