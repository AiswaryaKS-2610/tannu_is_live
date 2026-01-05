import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Home, Plane, Globe, Users } from 'lucide-react';

const events = [
    {
        year: 'Chapter 1',
        title: 'First Impressions',
        subtitle: 'SOTI',
        description: "Honestly? When I first saw you, I thought you were so 'jaada' (arrogant) and I didn't like you at all! 😂 But look at us now—inseparable!",
        icon: <Briefcase className="w-6 h-6 text-white" />,
        image: '/images/first meeting in soti.jpeg',
        color: 'bg-blue-500'
    },
    {
        year: 'Chapter 2',
        title: 'The Haunted Apartment',
        subtitle: 'DLF Kochi',
        description: 'The Golden Days! From Shylesh pretham 👻, Febin trying to jump off the balcony thinking he saw one, to our legendary lift horror stories, sleepovers. Unforgettable chaos!',
        icon: <Home className="w-6 h-6 text-white" />,
        image: '/images/Tannu and me.jpeg',
        color: 'bg-green-500'
    },
    {
        year: 'Chapter 3',
        title: 'International Adventures',
        subtitle: 'Thailand',
        description: 'From tuk-tuks to beaches, exploring the world together. A trip to remember forever.',
        icon: <Plane className="w-6 h-6 text-white" />,
        image: '/images/thailand.jpeg',
        color: 'bg-orange-500'
    },
    {
        year: 'Chapter 4',
        title: 'The Trio: Best Friends Forever',
        subtitle: 'Akshu x Tannu x Aishu',
        description: 'No matter where we are, our bond remains unbreakable. The Three Musketeers of life! ❤️',
        icon: <Users className="w-6 h-6 text-white" />,
        image: '/images/me tannu akshu 2.jpeg',
        color: 'bg-pink-500'
    },
    {
        year: 'Chapter 5',
        title: 'Miles Apart, Heart Close',
        subtitle: 'Dublin 🇮🇪 x Kerala 🇮🇳',
        description: 'Distance means so little when friendship means so much. Missing you every day!',
        icon: <Globe className="w-6 h-6 text-white" />,
        // Falling back to a nice image if no specific "distance" image exists, or leaving generic.
        // Using "me tannu.mp4" might be too heavy for a card, so leaving image blank or reusing one?
        // Let's leave it blank or use childhood one for nostalgia?
        image: '/images/me akshu tannu childhood.jpeg',
        color: 'bg-purple-500'
    }
];

const Story = () => {
    return (
        <div id="story" className="py-20 bg-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-16 font-cursive">Our Journey</h2>

            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 top-0 rounded-full" />

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        <div className="w-5/12 pl-4 pr-4">
                            <div className={`p-6 rounded-2xl shadow-lg bg-white border-b-4 hover:scale-105 transition-transform duration-300 ${event.color.replace('bg-', 'border-')}`}>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
                                <p className="text-sm font-semibold text-pink-500 mb-2">{event.subtitle}</p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{event.description}</p>
                                {event.image && (
                                    <div className="rounded-lg overflow-hidden shadow-sm mt-3 border-2 border-pink-100">
                                        <img src={event.image} alt={event.title} className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500" />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-2/12 flex justify-center relative z-10">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${event.color} border-4 border-white`}>
                                {event.icon}
                            </div>
                        </div>

                        <div className="w-5/12 pl-4 pr-4" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Story;
