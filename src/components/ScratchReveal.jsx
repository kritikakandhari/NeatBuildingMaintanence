import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import offerRevealImg from '../assets/offer_reveal.png';
import scratchOverlayImg from '../assets/scratch_overlay.png';

const ScratchReveal = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      
      // Fill with silver overlay color initially
      ctx.fillStyle = '#C0C0C0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw overlay image if needed
      const img = new Image();
      img.src = scratchOverlayImg;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Add text on top
        ctx.font = "bold 30px Inter";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("SCRATCH TO REVEAL OFFER", canvas.width / 2, canvas.height / 2);
        ctx.font = "18px Inter";
        ctx.fillText("Use your finger or mouse to clear the screen", canvas.width / 2, canvas.height / 2 + 40);
      };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getPosition = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x, y };
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    checkPercentage();
  };

  const scratch = (e) => {
    if (!isDrawing) return;
    // prevent scrolling on mobile while scratching
    if (e.cancelable) e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getPosition(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2, false);
    ctx.fill();
  };

  const checkPercentage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    const percentage = (transparent / (pixels.length / 4)) * 100;
    
    if (percentage > 40) {
      setIsScratched(true);
      setTimeout(() => {
        onComplete();
      }, 2500); // Wait a bit after revealing to show the offer, then close
    }
  };

  return (
    <AnimatePresence>
      {!isScratched && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div 
            ref={containerRef}
            className="relative w-[90%] max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
          >
            {/* Background image to reveal */}
            <img 
              src={offerRevealImg} 
              alt="Offer Reveal" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Canvas overlay */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full cursor-crosshair scratch-canvas"
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseMove={scratch}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchEnd={stopDrawing}
              onTouchMove={scratch}
            />
          </div>
          <button 
            onClick={onComplete}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScratchReveal;
