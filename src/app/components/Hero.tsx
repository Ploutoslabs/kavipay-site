import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import SparkleOverlay from './SparkleOverlay';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <SparkleOverlay count={12} color="#06b6d4" style="drift" />
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(30, 99, 198, 0.3), transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#1476B8] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#1476B8]" />
          <span className="text-sm text-white">The Future of Crypto Payments</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Bridge Crypto
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
            to Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-white/85 mb-8 max-w-3xl mx-auto"
        >
          Seamlessly convert your crypto to fiat and spend anywhere with KaviPay virtual and physical cards
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://app.kavipay.io/" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] text-white rounded-full font-semibold text-lg flex items-center space-x-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(30, 99, 198, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </a>

          <motion.button
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}