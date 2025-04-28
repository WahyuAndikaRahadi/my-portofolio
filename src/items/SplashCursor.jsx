import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SplashCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const controls = useAnimation();

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => {
      controls.start({ scale: 1.8 });
    };

    const handleMouseLeave = () => {
      controls.start({ scale: 1 });
    };

    const interactiveElements = document.querySelectorAll("button, a, .cursor-hover");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="w-8 h-8 fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{ x, y }}
      animate={controls}
      initial={{ scale: 1 }}
    >
      <div className="relative w-full h-full">
        {/* Garis Horizontal */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/80 rounded-sm transform -translate-y-1/2" />
        {/* Garis Vertikal */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/80 rounded-sm transform -translate-x-1/2" />
      </div>
    </motion.div>
  );
};

export default SplashCursor;
