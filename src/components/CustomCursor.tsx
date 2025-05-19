import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

// Utility to get a contrasting color (simple version: invert blue/navy)
function getContrastingColor(x: number, y: number) {
  // Example: alternate between blue and yellow based on position
  const hue = ((x + y) % 360);
  return `hsl(${(hue + 180) % 360}, 90%, 60%)`;
}

const POINTER_WIDTH = 32;
const POINTER_HEIGHT = 32;

const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [shadowColor, setShadowColor] = useState('rgba(0,0,0,0.18)');
  const [shadowShape, setShadowShape] = useState<'pointer' | 'button'>('pointer');
  const [buttonRect, setButtonRect] = useState<{width: number, height: number, borderRadius: number} | null>(null);
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setShadowColor(getContrastingColor(e.clientX, e.clientY));
      // Detect if over a button
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isButton = el.tagName === 'BUTTON' || el.classList.contains('cursor-pointer') || el.classList.contains('btn') || el.closest('button');
        if (isButton) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          const style = window.getComputedStyle(el as HTMLElement);
          const borderRadius = parseInt(style.borderRadius) || 8;
          setShadowShape('button');
          setButtonRect({ width: rect.width, height: rect.height, borderRadius });
          return;
        }
      }
      setShadowShape('pointer');
      setButtonRect(null);
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
    };
  }, [mouseX, mouseY]);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Shadow */}
      {shadowShape === 'button' && buttonRect ? (
        <motion.div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            width: buttonRect.width,
            height: buttonRect.height,
            x: mouseX,
            y: mouseY,
            borderRadius: buttonRect.borderRadius,
            background: shadowColor,
            opacity: 0.18,
            filter: 'blur(6px)',
            transform: `translate(${-buttonRect.width / 2}px, ${-buttonRect.height / 2}px)`
          }}
        />
      ) : (
        <motion.svg
          width={POINTER_WIDTH}
          height={POINTER_HEIGHT}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            x: mouseX,
            y: mouseY,
            filter: 'blur(6px)',
            opacity: 0.7,
            transform: 'translate(-8px, -8px)',
          }}
        >
          {/* Arrow shape shadow */}
          <polygon
            points="4,4 28,16 12,16 28,28 16,16 4,28"
            fill={shadowColor}
          />
        </motion.svg>
      )}
      {/* Main pointer */}
      <motion.svg
        width={POINTER_WIDTH}
        height={POINTER_HEIGHT}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          x: mouseX,
          y: mouseY,
          transform: 'translate(-8px, -8px)',
        }}
      >
        {/* Arrow shape */}
        <polygon
          points="4,4 28,16 12,16 28,28 16,16 4,28"
          fill="#60b7ff"
          stroke="#fff"
          strokeWidth={2}
          style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
        />
      </motion.svg>
    </>
  );
};

export default CustomCursor; 