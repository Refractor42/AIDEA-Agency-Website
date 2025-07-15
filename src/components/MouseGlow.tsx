import React, { useState, useEffect, useCallback, useRef } from 'react';

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<number>();
  const throttleRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (throttleRef.current) return;

    if (!isMoving) {
      setIsMoving(true);
    }
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    setPosition({ x: e.clientX, y: e.clientY });
    
    throttleRef.current = window.setTimeout(() => {
      throttleRef.current = undefined;
    }, 16); // Approximately 60fps
    
    timeoutRef.current = window.setTimeout(() => {
      setIsMoving(false);
    }, 100);
  }, [isMoving]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-200 ${
        isMoving ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(88, 101, 242, 0.15), transparent 40%)`,
      }}
    />
  );
};