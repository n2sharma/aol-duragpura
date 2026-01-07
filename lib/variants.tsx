import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

export const fadeIn = (direction: Direction, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      transition: {
        duration: 1.4,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
