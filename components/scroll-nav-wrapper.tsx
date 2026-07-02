"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollNavWrapper = ({ children, className }: Props) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // If we are at the very top, always show it.
    if (latest <= 50) {
      setHidden(false);
      return;
    }
    
    // Scrolling down -> hide
    if (latest > previous && latest > 150) {
      setHidden(true);
    } 
    // Scrolling up -> show
    else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn("fixed top-0 left-0 w-full z-50", className)}
    >
      {children}
    </motion.div>
  );
};
