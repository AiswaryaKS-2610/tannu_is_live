import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickSparkles = () => {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newSparkle = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setSparkles((prev) => [...prev, newSparkle]);

            // Remove sparkle after animation
            setTimeout(() => {
                setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {sparkles.map((sparkle) => (
                    <Sparkle key={sparkle.id} x={sparkle.x} y={sparkle.y} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const Sparkle = ({ x, y }) => {
    const randomColor = ['#FF69B4', '#FFD700', '#FFB6C1', '#9370DB'][Math.floor(Math.random() * 4)];

    return (
        <motion.div
            initial={{ scale: 0, opacity: 1, x, y }}
            animate={{
                scale: [0, 1.5, 0],
                opacity: [1, 1, 0],
                y: y - 100, // Float up
                x: x + (Math.random() - 0.5) * 50 // Drift slightly
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute text-2xl"
            style={{ color: randomColor }}
        >
            {['❤️', '✨', '🎉', '🌸'][Math.floor(Math.random() * 4)]}
        </motion.div>
    );
};

export default ClickSparkles;
