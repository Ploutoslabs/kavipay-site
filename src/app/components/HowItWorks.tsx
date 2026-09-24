import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SparkleOverlay from './SparkleOverlay';
import { useAmbientMotion } from './useAmbientMotion';
import { Download, Wallet, CreditCard, ShoppingBag } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Create Your Account',
    description: 'Download from the App Store or Google Play, then complete KYC in minutes',
  },
  {
    number: '02',
    icon: Wallet,
    title: 'Fund Your Wallet',
    description: 'Transfer Naira directly from your Nigerian bank account in seconds',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Get Your Card',
    description: 'Instantly generate a virtual card or order a physical card for daily use',
  },
  {
    number: '04',
    icon: ShoppingBag,
    title: 'Start Spending',
    description: 'Shop online, pay your bills, and spend in store with your Kavipay card',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Connection line for desktop */}
      {index < steps.length - 1 && (
        <motion.div
          className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#1476B8]/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          style={{ originX: 0 }}
        />
      )}

      <div className="relative group">
        {/* Step number */}
        <motion.div
          className="absolute -top-6 -left-6 text-8xl font-bold bg-gradient-to-br from-[#1E63C6]/20 to-[#0F8A8C]/20 bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          {step.number}
        </motion.div>

        {/* Card */}
        <motion.div
          className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 hover:border-[#1476B8]/50 transition-all duration-300"
          whileHover={{ y: -5 }}
        >
          {/* Icon */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] rounded-2xl flex items-center justify-center mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
          <p className="text-white/60 leading-relaxed">{step.description}</p>

          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const ambient = useAmbientMotion();
  const orbTransition = ambient.active
    ? { duration: 20, repeat: Infinity, ease: 'easeInOut' as const }
    : { duration: 0.6 };

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-black via-[#1E63C6]/10 to-black overflow-hidden">
      <SparkleOverlay count={7} color="#0ea5e9" style="flowing" />
      {/* Animated background elements */}
      <div ref={ambient.ref} className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#1E63C6]/10 rounded-full blur-3xl"
          animate={ambient.active ? { x: [0, 100, 0], y: [0, 50, 0] } : { x: 0, y: 0 }}
          transition={orbTransition}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0F8A8C]/10 rounded-full blur-3xl"
          animate={ambient.active ? { x: [0, -100, 0], y: [0, -50, 0] } : { x: 0, y: 0 }}
          transition={orbTransition}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Get Started in
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            From sign up to your first payment — here is exactly how KaviPay works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}