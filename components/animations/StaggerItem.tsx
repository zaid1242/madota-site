"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [
        number,
        number,
        number,
        number
      ],
    },
  },
};

export default function StaggerItem({
  children,
}: Props) {
  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}