import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
}

function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-title-tag">&lt;</span>
      {children}
      <span className="section-title-tag">/&gt;</span>
    </motion.h2>
  );
}

export default SectionTitle;
