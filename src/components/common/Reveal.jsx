import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60, rotateY: 8 },
    visible: { opacity: 1, x: 0, rotateY: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 60, rotateY: -8 },
    visible: { opacity: 1, x: 0, rotateY: 0 }
  },
  scaleRotate: {
    hidden: { opacity: 0, scale: 0.85, rotateX: 12, rotateY: -6 },
    visible: { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }
  },
  flipIn: {
    hidden: { opacity: 0, rotateX: -45, y: 30 },
    visible: { opacity: 1, rotateX: 0, y: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.7, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
  }
};

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  variant = "fadeUp",
  duration = 0.6
}) => {
  const v = variants[variant] || variants.fadeUp;

  return (
    <motion.div
      initial={v.hidden}
      whileInView={v.visible}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
