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
      
      {/* Right Side Widget */}
      <div className="absolute right-6 bottom-12 pointer-events-auto z-50">
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-gray-50 flex flex-col items-center gap-4 w-48">
          
          <button 
            onClick={handleClose}
            className="absolute -top-3 -right-3 w-8 h-8 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center transition-colors shadow-sm"
            title="Close Game"
          >
            <X className="w-4 h-4" />
          </button>

          {gameStatus !== 'gameover' ? (
            <>
              {/* Double tap instruction */}
              <div className="text-center w-full pb-2 border-b border-gray-100">
                <p className="text-[11px] font-bold text-gray-600 leading-tight uppercase tracking-wide">
                  Double tap <br/> to clean the mess!
                </p>
              </div>

              {/* Time Left */}
              <div className="w-full bg-blue-50 rounded-2xl p-3 text-center">
                <p className="text-[10px] font-bold text-blue-900 tracking-wider mb-1">TIME LEFT</p>
                <p className={`text-3xl font-black ${timeLeft <= 10 && gameStatus === 'playing' ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
                  {timeLeft}s
                </p>
              </div>

              {/* Score */}
              <div className="w-full bg-blue-50 rounded-2xl p-3 text-center">
                <p className="text-[10px] font-bold text-blue-900 tracking-wider mb-1">TRASH CLEANED</p>
                <p className="text-3xl font-black text-blue-500">{score}</p>
              </div>

              {gameStatus === 'idle' ? (
                <button 
                  onClick={handleStart}
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 text-center font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" /> START
                </button>
              ) : (
                <div className="w-full bg-blue-400 text-white rounded-xl py-2 text-center font-bold text-sm shadow-md animate-pulse">
                  CLEAN UP!
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              <Trash2 className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-bold text-dark mb-1">Time's Up!</p>
              <p className="text-xs text-gray-500 mb-2">You cleaned</p>
              <p className="text-3xl font-black text-primary mb-2">{score}</p>
              <p className="text-xs text-gray-500">items.</p>
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
