// src/components/RibbonCursor/GlobalCursor.jsx
'use client';

import React, { useEffect } from 'react';
import Ribbons from './Ribbons';

const GlobalCursor = () => {
  useEffect(() => {
    // Hide default cursor on body
    document.body.style.cursor = 'none';

    // Keep normal cursor for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.style.cursor = 'auto';
    });

    return () => {
      document.body.style.cursor = 'auto';
      interactiveElements.forEach(el => {
        el.style.cursor = '';
      });
    };
  }, []);

  const cursorSettings = {
    colors: ['#FF3366', '#FF6B6B', '#4ECDC4'],
    baseThickness: 15,
    pointCount: 25,
    maxAge: 200,
    baseSpring: 0.05,
    baseFriction: 0.85,
    speedMultiplier: 0.8,
    offsetFactor: 0.03,
    enableShaderEffect: false,
    enableFade: true,
    backgroundColor: [0, 0, 0, 0]
  };

  return <Ribbons {...cursorSettings} />;
};

export default GlobalCursor;