import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Images to use for the game cards
const cardImages = [
    { src: '/images/first meeting in soti.jpeg', id: 1 },
    { src: '/images/Tannu and me.jpeg', id: 2 },
    { src: '/images/thailand.jpeg', id: 3 },
    { src: '/images/me tannu akshu 2.jpeg', id: 4 },
    { src: '/images/me akshu tannu childhood.jpeg', id: 5 },
    { src: '/images/first outing.jpg', id: 6 },
];

const MemoryGame = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    // Shuffle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, uniqueId: Math.random(), matched: false }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setGameWon(false);
    };

    // Handle a choice
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // Compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.id === choiceTwo.id) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.id === choiceOne.id) {
                            return { ...card, matched: true };
                        }
                        return card;
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    // Check for win
    useEffect(() => {
        if (cards.length > 0 && cards.every((card) => card.matched)) {
            setGameWon(true);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FF69B4', '#FFD700', '#FFB6C1']
            });
        }
    }, [cards]);

    // Reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
    };

    // Start game automatically on mount
    useEffect(() => {
        shuffleCards();
    }, []);

    return (
        <div className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-cursive text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                    Memory Lane Game
                </h2>
                <p className="text-gray-600">Match the memories to win a surprise!</p>
                <div className="mt-4 flex justify-center gap-4 align-middle">
                    <p className="text-lg font-semibold text-gray-700 py-2">Turns: {turns}</p>
                    <button
                        onClick={shuffleCards}
                        className="px-4 py-2 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors font-medium"
                    >
                        Restart Game
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {cards.map((card) => (
                        <SingleCard
                            key={card.uniqueId}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </div>

            {gameWon && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl z-50 text-center border-4 border-pink-300"
                >
                    <h3 className="text-3xl font-bold text-pink-600 font-cursive mb-2">Yay! You Won! 🎉</h3>
                    <p className="text-gray-700">You know our memories the best!</p>
                    <button
                        onClick={() => setGameWon(false)}
                        className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold shadow-lg"
                    >
                        Close
                    </button>
                </motion.div>
            )}
        </div>
    );
};

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    return (
        <div className="relative aspect-square cursor-pointer perspective-1000" onClick={handleClick}>
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-500"
                animate={{ rotateY: flipped ? 180 : 0 }}
            >
                {/* Front of card (Image) */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-md border-2 border-pink-200 rotate-y-180 bg-white">
                    <img
                        src={card.src}
                        alt="memory"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Back of card (Cover) */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl shadow-md border-2 border-white flex items-center justify-center">
                    <span className="text-4xl">❤️</span>
                </div>
            </motion.div>
        </div>
    );
};

export default MemoryGame;
