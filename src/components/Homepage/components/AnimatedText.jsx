import { motion } from "framer-motion";

export const AnimatedText = ({ text, duration, delayChildren }) => {
    const textVariants = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: duration || 1,
          ease: "easeOut",
          staggerChildren: .1,
          delayChildren: delayChildren || 0,
        },
      },
    };
  
    const letterVariants = {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
    };
  
    const arrayText = text.split("");
  
    return (
      <motion.span variants={textVariants} initial="initial" animate="animate">
        {arrayText.map((letter, index) => {
          return (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };