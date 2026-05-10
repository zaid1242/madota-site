"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function StaggerContainer({
  children,
}: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}