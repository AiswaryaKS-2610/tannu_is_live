import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const media = [
    { type: 'image', src: '/images/Tannu and me.jpeg', alt: 'Tannu and me' },
    { type: 'image', src: '/images/first outing.jpg', alt: 'First Outing' },
    { type: 'image', src: '/images/me akshu tannu childhood.jpeg', alt: 'Childhood Memories' },
    { type: 'image', src: '/images/me akshu tannu.jpeg', alt: 'The Trio' },
    { type: 'image', src: '/images/thailand.jpeg', alt: 'Thailand Trip' },
    { type: 'video', src: '/images/me akshu tannu video.mp4' },
    { type: 'video', src: '/images/me tannu.mp4' },
    { type: 'video', src: '/images/tannu me onam.mp4' },
    { type: 'video', src: '/images/thailand video.mp4' },
    { type: 'video', src: '/images/thailand video 2.mp4' },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="py-20 bg-pink-50 min-h-screen">
            <h2 className="text-5xl md:text-7xl text-center font-bold text-gray-800 mb-16 font-cursive text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Golden Memories
            </h2>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 p-6 max-w-7xl mx-auto">
                {media.map((item, index) => (
                    <motion.div
                        layoutId={`card-${index}`}
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedId(index)}
                        className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer transform hover:-translate-y-2"
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        ) : (
                            <div className="relative group">
                                <video
                                    src={item.src}
                                    className="w-full h-auto"
                                    preload="metadata"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center pl-1">
                                        ▶
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors p-2"
                            >
                                <X size={32} />
                            </button>

                            {media[selectedId].type === 'image' ? (
                                <img
                                    src={media[selectedId].src}
                                    alt={media[selectedId].alt}
                                    className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
                                />
                            ) : (
                                <video
                                    src={media[selectedId].src}
                                    controls
                                    autoPlay
                                    className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
