import { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';
import { ComingSoonBadge } from './ComingSoonBadge';
import { useAmbientMotion } from './useAmbientMotion';

const PARTICLE_COUNT = 20;

export function Hero() {
  const ambient = useAmbientMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  // Generated once so particles keep their position across re-renders.
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    [],
  );

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center bg-black"
    >
      <SparkleOverlay count={12} color="#06b6d4" style="drift" />

      {/* Animated Background */}
      <div
        ref={ambient.ref}
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(30, 99, 198, 0.3), transparent 50%)',
          }}
          animate={
            ambient.active
              ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }
              : { scale: 1, opacity: 0.3 }
          }
          transition={
            ambient.active
              ? { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.6 }
          }
        />

        {/* Floating particles */}
        {ambient.active && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#1476B8]"
            style={{ left: particle.left, top: particle.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
        >
          <Sparkles className="h-4 w-4 text-[#1476B8]" aria-hidden="true" />
          <span className="text-sm text-white">The Future of Digital Payments</span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Bridging Digital
          </span>
          <br />
          {/* Badge sits inline with the second line. flex-wrap so it drops
              below the headline on narrow screens instead of squashing it. */}
          <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
             Payments
            </span>
            <ComingSoonBadge size="md" className="translate-y-1" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 max-w-3xl text-xl text-white/85 md:text-2xl"
        >
          Virtual and physical cards, instant bill payments, and Naira funding —
          all from one app.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="https://app.kavipay.io/" target="_blank" rel="noopener noreferrer">
            <motion.span
              className="group flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] px-8 py-4 text-lg font-semibold text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 99, 198, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.span>
          </a>

          <motion.button
            type="button"
            onClick={scrollToFeatures}
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          animate={ambient.active ? { y: [0, 10, 0] } : { y: 0 }}
          transition={ambient.active ? { duration: 2, repeat: Infinity } : undefined}
          aria-hidden="true"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-2">
            <motion.div
              className="h-2 w-1 rounded-full bg-white/50"
              animate={ambient.active ? { y: [0, 12, 0] } : { y: 0 }}
              transition={ambient.active ? { duration: 2, repeat: Infinity } : undefined}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
