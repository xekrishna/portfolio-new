// components/ui/context-menu.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getDefaultOptions } from "@/data/options";
import { useNavigation } from "@/hooks/useRouter";

const ContextMenu = () => {
  const { back, forward, reload } = useNavigation();
  const defaultOptions = getDefaultOptions(back, forward, reload);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setMenuPosition({
        x: event.clientX,
        y: event.clientY,
      });
      setIsVisible(true);
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <motion.ul
          className="hidden lg:block fixed dark:bg-navMain/10 bg-[#DCDCDC]/10 border backdrop-blur-md border-navItem text-white rounded-xl shadow-lg p-1 z-[50000]"
          style={{ left: menuPosition.x, top: menuPosition.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <motion.ul
            className="dark:bg-navMain/30 bg-[#DCDCDC]/50 border border-navItem/60 dark:text-white/70 text-black rounded-lg shadow-lg p-2 z-50 w-max"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {defaultOptions.map((navOption, index) => (
              <li
                key={`nav-${index}`}
                className={`px-2 py-2 dark:hover:bg-navItem hover:bg-[#B9B9B9] cursor-pointer rounded-lg ${
                  navOption.disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (!navOption.disabled) {
                    navOption.onClick();
                    setIsVisible(false);
                  }
                }}
              >
                {navOption.label}
              </li>
            ))}
          </motion.ul>
        </motion.ul>
      )}
    </>
  );
};

export default ContextMenu;
