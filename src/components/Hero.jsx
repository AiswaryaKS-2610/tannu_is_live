import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const scrollToStory = () => {
        const storySection = document.getElementById('story');
        if (storySection) {
            storySection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if id isn't set yet, scroll down 100vh
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    return (
        <div className="h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex flex-col items-center justify-center overflow-hidden relative">
            {/* Enhanced Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full mix-blend-overlay"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        x: [null, (Math.random() - 0.5) * 50],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 20 + 10 + 'px',
                        height: Math.random() * 20 + 10 + 'px',
                    }}
                />
            ))}

            <div className="z-10 text-center p-10 bg-white/40 backdrop-blur-lg rounded-[2rem] shadow-2xl border border-white/60 transform hover:scale-105 transition-transform duration-500">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-gray-700 font-sans tracking-widest mb-2"
                >
                    TO OUR DEAREST
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-cursive leading-tight"
                >
                    Tannu <span className="inline-block animate-pulse">❤️</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-6 text-xl text-gray-600 font-medium italic"
                >
                    Wishing you the happiest birthday ever!
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    onClick={scrollToStory}
                    className="mt-8 px-8 py-3 bg-white/70 text-pink-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                    Begin Journey <ArrowDown size={20} />
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
