import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import MemoryGame from './components/MemoryGame';
import ClickSparkles from './components/ClickSparkles';

function App() {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            <ClickSparkles />
            <Hero />
            <Story />
            <MemoryGame />
            <Gallery />

            <footer className="bg-pink-100 py-8 text-center text-pink-600">
                <p className="font-medium text-lg">Made with ❤️ by Aishu and Akshu</p>
                <p className="text-sm mt-2 font-light">For our bestie Tannu</p>
            </footer>
        </div>
    );
}

export default App;
