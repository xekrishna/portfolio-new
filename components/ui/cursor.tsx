'use client'

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [pointerSize, setPointerSize] = useState('h-1 w-1')

    // Update cursor position on mouse move
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setCursorPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        const handleMouseClick = () => {
            setPointerSize('w-4 h-4')
            setTimeout(() => {
                setPointerSize('h-1 w-1');
            }, 100);
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick)
        };
    }, []);

    return (
        <>
            {/* Outer Circle */}
            <motion.div
                className="absolute top-0 left-0 w-4 h-4 bg-transparent border dark:border-white border-black rounded-full pointer-events-none z-[9999999]"
                animate={{ x: cursorPosition.x, y: cursorPosition.y }}
                transition={{ ease: "easeOut", duration: 0.4 }}
                style={{ translateX: '-50%', translateY: '-50%' }}
            />
            {/* Inner Dot */}
            <motion.div
                className={`absolute top-0 left-0 dark:bg-white bg-black rounded-full pointer-events-none z-[9999999] ${pointerSize}`}
                animate={{ x: cursorPosition.x, y: cursorPosition.y }}
                transition={{ duration: 0.1 }}
                style={{ translateX: '-50%', translateY: '-50%' }}
            />
        </>
    );
};

export default Cursor;
