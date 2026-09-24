import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useAmbientMotion } from './useAmbientMotion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export function PageHeader({ title, subtitle, showBackButton = true }: PageHeaderProps) {
  const ambient = useAmbientMotion();

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-black border-b border-white/10">
      {/* Background effects */}
      <div ref={ambient.ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E63C6]/20 rounded-full blur-3xl"
          animate={
            ambient.active
              ? { scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }
              : { scale: 1, opacity: 0.2 }
          }
          transition={
            ambient.active
              ? { duration: 8, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.6 }
          }
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F8A8C]/20 rounded-full blur-3xl"
          animate={
            ambient.active
              ? { scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }
              : { scale: 1, opacity: 0.2 }
          }
          transition={
            ambient.active
              ? { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }
              : { duration: 0.6 }
          }
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {showBackButton && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
