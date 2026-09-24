import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Lock, Eye, Fingerprint, Clock } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';
import { ComingSoonBadge } from './ComingSoonBadge';
import { useAmbientMotion } from './useAmbientMotion';
import { CERTIFICATIONS } from '../config/features';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Encryption',
    description: 'AES-256 encryption protects all your data',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Authentication',
    description: 'Face ID and fingerprint security',
  },
  {
    icon: Lock,
    title: '2FA Protection',
    description: 'Two-factor authentication on all accounts',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description: '24/7 fraud detection and prevention',
  },
];

export function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const ambient = useAmbientMotion();

  return (
    <section id="security" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <SparkleOverlay count={9} color="#10b981" style="pulse" />
      {/* Animated background */}
      <div ref={ambient.ref} className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(30, 99, 198, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 99, 198, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-[#1476B8]/20 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={
              ambient.active
                ? { scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }
                : { scale: 1, opacity: 0.1 }
            }
            transition={
              ambient.active
                ? { duration: 4, delay: i * 1.3, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.6 }
            }
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] rounded-2xl mb-8"
            animate={ambient.active ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
            transition={
              ambient.active
                ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 0.6 }
            }
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Security You Can
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Trust
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your account and your funds are protected by multiple independent layers of security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#1476B8]/50 transition-all duration-300">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E63C6]/20 via-[#1476B8]/20 to-[#0F8A8C]/20 rounded-xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#1476B8]" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>

                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance roadmap.
            These certifications are being pursued, not held. The green ticks
            that used to sit here read as "achieved", so they are gone. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex flex-wrap items-center justify-center gap-3">
              <h3 className="text-lg font-semibold text-white/80">
                Compliance Roadmap
              </h3>
              <ComingSoonBadge size="sm" />
            </div>
            <p className="mt-3 text-sm text-white/50 max-w-xl mx-auto leading-relaxed">
              We're actively working towards these certifications. They are not yet
              in place, and we'll update this page as each one is achieved.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {CERTIFICATIONS.map((certification) => (
              <motion.li
                key={certification}
                className="flex items-center space-x-2 bg-white/[0.02] border border-white/[0.07] rounded-full px-6 py-3"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-4 h-4 text-[#7BB8E8]/70" aria-hidden="true" />
                <span className="text-white/60 font-medium">{certification}</span>
                <span className="text-xs uppercase tracking-wider text-[#7BB8E8]/70">
                  In progress
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}