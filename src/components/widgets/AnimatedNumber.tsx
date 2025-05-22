"use client"
import React, { useEffect, useState } from 'react';

const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({ value, duration = 1500 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);

    return () => {
      // cleanup if component unmounts
      startTimestamp = null;
    };
  }, [value, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
};

export default AnimatedNumber;
