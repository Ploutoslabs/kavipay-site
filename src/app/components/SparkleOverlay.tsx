import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useAmbientMotion } from './useAmbientMotion';

type MotionStyle = 'subtle' | 'flowing' | 'pulse' | 'drift';

type SparkleOverlayProps = {
  count?: number;
  color?: string;
  maxSize?: number;
  style?: MotionStyle;
  opacity?: number;
};

const motionProfiles = {
  subtle: {
    duration: { min: 3, max: 5 },
    delay: { min: 0, max: 2 },
    movement: () => ({
      y: [0, -8 - Math.random() * 8, 0],
      x: [0, -3 + Math.random() * 6, 0],
      opacity: [0.1, 0.5, 0.1],
      scale: [1, 1.2, 1],
    }),
  },
  flowing: {
    duration: { min: 4, max: 7 },
    delay: { min: 0, max: 3 },
    movement: () => ({
      y: [0, -20 - Math.random() * 15, 0],
      x: [0, -8 + Math.random() * 16, 0],
      opacity: [0.15, 0.7, 0.1],
      scale: [0.8, 1.4, 0.8],
    }),
  },
  pulse: {
    duration: { min: 2, max: 4 },
    delay: { min: 0, max: 2 },
    movement: () => ({
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }),
  },
  drift: {
    duration: { min: 5, max: 8 },
    delay: { min: 0, max: 4 },
    movement: () => ({
      y: [0, -30 - Math.random() * 20, 0],
      x: [0, -15 + Math.random() * 30, 0],
      opacity: [0.08, 0.6, 0.05],
      scale: [0.6, 1.3, 0.6],
    }),
  },
};

// The glow is painted by the gradient itself. A per-particle `filter: blur()`
// plus `box-shadow` looked the same but forced a repaint of every sparkle on
// every animation frame.
const GLOW_SPREAD = 3;

export default function SparkleOverlay({
  count = 8,
  color = '#0ea5e9',
  maxSize = 5,
  style = 'subtle',
  opacity = 0.6,
}: SparkleOverlayProps) {
  const { ref, active } = useAmbientMotion();

  // Randomised once, so a parent re-render doesn't reshuffle and restart them.
  const particles = useMemo(() => {
    const profile = motionProfiles[style];
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: (1.5 + Math.random() * maxSize) * GLOW_SPREAD,
      delay: profile.delay.min + Math.random() * (profile.delay.max - profile.delay.min),
      duration:
        profile.duration.min + Math.random() * (profile.duration.max - profile.duration.min),
      movement: profile.movement(),
    }));
  }, [count, maxSize, style]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {active &&
        particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${color} 0%, ${color} 18%, transparent 60%)`,
            }}
            animate={particle.movement}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
            initial={{ opacity: opacity * 0.1 }}
          />
        ))}
    </div>
  );
}
