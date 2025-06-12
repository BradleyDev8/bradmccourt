'use client';

import React, { useRef, useEffect, useCallback, useState } from 'react';

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const isDrawingRef = useRef(false);
  const hasDrawnRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width =
      (canvas.parentElement?.clientWidth || window.innerWidth) * dpr;
    canvas.height =
      (canvas.parentElement?.clientHeight || window.innerHeight) * dpr;
    context.scale(dpr, dpr);

    contextRef.current = context;

    context.lineCap = 'round';
    context.lineWidth = 5;
    context.strokeStyle = '#0F0';

    if (!hasDrawnRef.current) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      context.lineWidth = 5;
      context.strokeStyle = '#0F0';
      context.shadowColor = '#0F0';
      context.shadowBlur = 6;
      context.font = '48px "Comic Sans MS", cursive';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.strokeText(
        'Draw Here :)',
        canvas.width / (2 * dpr),
        canvas.height / (2 * dpr)
      );
      context.restore();
    }
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
  };

  useEffect(() => {
    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const startDrawing = (e: PointerEvent) => {
      if (!hasDrawnRef.current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        hasDrawnRef.current = true;
      }
      const { offsetX, offsetY } = e;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      isDrawingRef.current = true;
    };

    const draw = (e: PointerEvent) => {
      if (!isDrawingRef.current) return;
      const { offsetX, offsetY } = e;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      context.closePath();
      isDrawingRef.current = false;
    };

    canvas.addEventListener('pointerdown', startDrawing);
    canvas.addEventListener('pointermove', draw);
    canvas.addEventListener('pointerup', stopDrawing);
    canvas.addEventListener('pointerleave', stopDrawing);

    // Add touch event listeners for mobile compatibility
    canvas.addEventListener('touchstart', (e) => startDrawing(e as unknown as PointerEvent));
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault(); // Prevent scrolling/zooming while drawing
      draw(e as unknown as PointerEvent);
    });
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'z') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        hasDrawnRef.current = false;
        setupCanvas();
      } else if (event.key.toLowerCase() === 'r') {
        context.strokeStyle = getRandomColor();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('resize', setupCanvas);
      canvas.removeEventListener('pointerdown', startDrawing);
      canvas.removeEventListener('pointermove', draw);
      canvas.removeEventListener('pointerup', stopDrawing);
      canvas.removeEventListener('pointerleave', stopDrawing);
      canvas.removeEventListener('touchstart', (e) => startDrawing(e as unknown as PointerEvent));
      canvas.removeEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling/zooming while drawing
        draw(e as unknown as PointerEvent);
      });
      canvas.removeEventListener('touchend', stopDrawing);
      canvas.removeEventListener('touchcancel', stopDrawing);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setupCanvas]);

  return (
    <div
      className="relative w-full h-64 bg-ui-component-default rounded-lg overflow-hidden flex flex-col justify-end"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full cursor-crosshair"
      />
      {isHovering && (
        <div className="absolute bottom-2 left-0 right-0 text-center text-white text-sm z-10 pointer-events-none">
          <span className="bg-gray-700 px-1 py-0.5 rounded mr-1">Z</span> to
          Clear
          <span className="ml-4 bg-gray-700 px-1 py-0.5 rounded mr-1">R</span>{' '}
          for Random color
        </div>
      )}
    </div>
  );
};

export default DrawingCanvas;
