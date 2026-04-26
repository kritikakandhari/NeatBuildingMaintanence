import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Play } from 'lucide-react';

// Trash item emojis/types
const trashTypes = ['🥫', '🥤', '🍾', '🗞️', '🍌', '📦', '🧃'];

const CatchTheTrashGame = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState('idle'); // 'idle', 'playing', 'gameover'
  const [items, setItems] = useState([]);
  const itemIdCounter = useRef(0);

  // Timer logic
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameStatus('gameover');
          setTimeout(() => {
            onComplete();
          }, 4000); // Close after 4s of showing game over
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStatus, onComplete]);

  // Item spawning logic
  useEffect(() => {
    if (gameStatus === 'gameover') return;

    const spawnItem = () => {
      const id = itemIdCounter.current++;
      const type = trashTypes[Math.floor(Math.random() * trashTypes.length)];
      
      // Spawn from bottom, move upwards with some horizontal drift
      const startX = Math.random() * 80 + 10; // 10% to 90%
      // Float slower: 8s to 12s duration
      const duration = Math.random() * 4 + 8; 
      
      const newItem = {
        id,
        type,
        startX,
        duration,
        rotation: Math.random() * 360,
        clicked: false
      };

      setItems(prev => [...prev, newItem]);

      // Remove item after its animation duration if not clicked
      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== id));
      }, duration * 1000);
    };

    // Spawn items a bit slower
    const interval = setInterval(spawnItem, 1500); 

    return () => clearInterval(interval);
  }, [gameStatus]);

  const handleCatch = (id, e) => {
    e.stopPropagation();
    if (gameStatus === 'gameover') return;

    // Mark as clicked so we can animate it shrinking/disappearing
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, clicked: true } : item
    ));

    if (gameStatus === 'playing') {
      setScore(prev => prev + 1);
    }

    // Remove from DOM shortly after
    setTimeout(() => {
      setItems(prev => prev.filter(item => item.id !== id));
    }, 300);
  };

  const handleClose = () => {
    setGameStatus('gameover');
    onComplete();
  };

  const handleStart = () => {
    setGameStatus('playing');
  };

  return (
    <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden font-sans">
      
      {/* Responsive Game UI */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 lg:top-auto lg:bottom-12 lg:right-6 lg:left-auto lg:translate-x-0 pointer-events-auto z-50 w-[90%] max-w-sm lg:w-48">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-3 lg:p-6 shadow-2xl border-4 border-gray-50 flex flex-row lg:flex-col items-center gap-2 lg:gap-4 overflow-hidden">
          
          <button 
            onClick={handleClose}
            className="absolute top-1 right-1 lg:-top-3 lg:-right-3 w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center transition-colors shadow-sm z-50"
            title="Close Game"
          >
            <X className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>

          {gameStatus !== 'gameover' ? (
            <>
              {/* Double tap instruction - Hidden on mobile to save space */}
              <div className="hidden lg:block text-center w-full pb-2 border-b border-gray-100">
                <p className="text-[11px] font-bold text-gray-600 leading-tight uppercase tracking-wide">
                  Double tap <br/> to clean the mess!
                </p>
              </div>

              {/* Stats Container - Row on mobile, Column on desktop */}
              <div className="flex flex-row lg:flex-col gap-2 flex-1">
                {/* Time Left */}
                <div className="bg-blue-50/80 rounded-xl lg:rounded-2xl p-2 lg:p-3 text-center flex-1 min-w-[70px]">
                  <p className="text-[8px] lg:text-[10px] font-bold text-blue-900 tracking-wider mb-0 lg:mb-1">TIME</p>
                  <p className={`text-xl lg:text-3xl font-black ${timeLeft <= 10 && gameStatus === 'playing' ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
                    {timeLeft}s
                  </p>
                </div>

                {/* Score */}
                <div className="bg-blue-50/80 rounded-xl lg:rounded-2xl p-2 lg:p-3 text-center flex-1 min-w-[70px]">
                  <p className="text-[8px] lg:text-[10px] font-bold text-blue-900 tracking-wider mb-0 lg:mb-1">SCORE</p>
                  <p className="text-xl lg:text-3xl font-black text-blue-500">{score}</p>
                </div>
              </div>

              {gameStatus === 'idle' ? (
                <button 
                  onClick={handleStart}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 lg:px-0 py-2 lg:py-3 text-center font-bold text-xs lg:text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-3 h-3 lg:w-4 lg:h-4 fill-current" /> <span className="whitespace-nowrap">START</span>
                </button>
              ) : (
                <div className="bg-blue-400 text-white rounded-xl px-4 lg:px-0 py-2 lg:py-3 text-center font-bold text-xs lg:text-sm shadow-md animate-pulse flex items-center justify-center whitespace-nowrap">
                  CLEANING!
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-1 lg:py-4 w-full flex lg:flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <Trash2 className="w-6 h-6 lg:w-12 lg:h-12 text-primary" />
                <span className="text-xs font-bold text-dark lg:hidden">TIME'S UP!</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-500 lg:block hidden">You cleaned</span>
                <p className="text-xl lg:text-3xl font-black text-primary">{score}</p>
                <span className="text-[10px] text-gray-500">items</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Trash Items */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {items.map(item => (
            !item.clicked && (
              <motion.div
                key={item.id}
                initial={{ 
                  y: '90vh', // Start near the bottom of hero
                  x: `${item.startX}vw`,
                  rotate: item.rotation,
                  scale: 0
                }}
                animate={{ 
                  y: '-20vh', // Float up past the top boundary, gets clipped by overflow-hidden exactly at navbar
                  x: `${item.startX + (Math.random() * 20 - 10)}vw`,
                  rotate: item.rotation + 360,
                  scale: 1.5
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ 
                  duration: item.duration, 
                  ease: "linear",
                  scale: { duration: 0.3 } // Quick scale up at start
                }}
                onDoubleClick={(e) => handleCatch(item.id, e)}
                // Also support touch double tap using a manual implementation or just relying on fast clicks
                onTouchEnd={(e) => {
                  const now = Date.now();
                  if (item.lastTouch && now - item.lastTouch < 300) {
                     handleCatch(item.id, e);
                  }
                  item.lastTouch = now;
                }}
                className="absolute text-5xl pointer-events-auto cursor-pointer select-none drop-shadow-xl hover:scale-110 transition-transform"
                style={{ touchAction: 'manipulation' }}
              >
                {item.type}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default CatchTheTrashGame;
