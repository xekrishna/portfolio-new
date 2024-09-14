'use client'

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

interface MenuOption {
    label: string;
    onClick: () => void;
}

interface ContextMenuProps {
    options: MenuOption[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ options }) => {
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Right-click event listener
    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault(); // Prevent default right-click menu
            setMenuPosition({
                x: event.clientX,
                y: event.clientY,
            });
            setIsVisible(true);
        };

        const handleClick = () => {
            setIsVisible(false); // Hide the menu when clicking elsewhere
        };

        window.addEventListener('contextmenu', handleContextMenu); // Listen for right-click
        window.addEventListener('click', handleClick); // Hide menu on normal click

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <motion.ul
                    className="absolute bg-menu border border-menuBorder/50 text-white rounded-xl shadow-lg p-1 z-50"
                    style={{ left: menuPosition.x, top: menuPosition.y }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.ul className=" bg-menu border border-menuBorder/60 text-white rounded-lg shadow-lg p-2 z-50 w-max"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-2 py-2 hover:bg-menuBorder cursor-pointer rounded-lg"
                            onClick={() => {
                                option.onClick();
                                setIsVisible(false); 
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                    </motion.ul>
                </motion.ul>
            )}
        </>
    );
};

export default ContextMenu;
