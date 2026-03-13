import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import SparkleOverlay from './SparkleOverlay';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const displayValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      displayValue.set(Math.round(latest));
    });
  }, [springValue, displayValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
}

const stats = [
  {
    value: 75,
    suffix: 'K',
    label: 'Active Users',
    gradient: 'from-[#1E63C6] to-[#1476B8]',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Countries',
    gradient: 'from-[#1476B8] to-[#0F8A8C]',
  },
  {
    value: 50,
    suffix: 'K+',
    label: 'Transactions',
    gradient: 'from-[#0F8A8C] to-[#1E63C6]',
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime',
    gradient: 'from-[#1476B8] to-[#1E63C6]',
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <SparkleOverlay count={5} color="#0ea5e9" style="subtle" />
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#1476B8] to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0F8A8C] to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center group"
            >
              {/* Value */}
              <motion.div
                className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                whileHover={{ scale: 1.05 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>

              {/* Label */}
              <div className="text-white/60 font-medium">{stat.label}</div>

              {/* Hover effect */}
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}
              />

              {/* Divider (except last item on large screens) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-px h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}