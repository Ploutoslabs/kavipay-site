import { motion, useInView, useReducedMotion, useSpring } from 'motion/react';
import { useRef } from 'react';
import { CreditCard, Shield, Zap, Globe, Wallet, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';
import { ComingSoonBadge } from './ComingSoonBadge';
import { useComingSoon } from './ComingSoonProvider';
import { FEATURES } from '../config/features';
import type { FeatureKey } from '../config/features';

interface FeatureCardData {
  /** Links the card to `config/features.ts`, which decides availability. */
  key: FeatureKey;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const features: FeatureCardData[] = [
  {
    key: 'virtualCards',
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    description:
      'Issue a virtual card instantly, or order a physical card delivered to your door',
    gradient: 'from-[#1E63C6] to-[#1476B8]',
  },
  {
    key: 'withdrawals',
    icon: Zap,
    title: 'Fast Withdrawals',
    description:
      'Withdraw your balance straight to your linked Nigerian bank account',
    gradient: 'from-[#1476B8] to-[#0F8A8C]',
  },
  {
    key: 'login',
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security with biometric authentication and encryption',
    gradient: 'from-[#0F8A8C] to-[#1E63C6]',
  },
  {
    key: 'globalAcceptance',
    icon: Globe,
    title: 'Global Acceptance',
    description:
      'Worldwide merchant acceptance on every Kavipay card, wherever you are',
    gradient: 'from-[#1E63C6] to-[#0F8A8C]',
  },
  {
    key: 'multiCurrencyWallet',
    icon: Wallet,
    title: 'Multi-Currency Wallet',
    description: 'Hold and manage multiple currencies side by side in one wallet',
    gradient: 'from-[#1476B8] to-[#1E63C6]',
  },
  {
    key: 'realTimeRates',
    icon: TrendingUp,
    title: 'Real-Time Rates',
    description: 'Live market pricing applied to every conversion as it happens',
    gradient: 'from-[#0F8A8C] to-[#1476B8]',
  },
];

const TILT_SPRING = { stiffness: 300, damping: 30 };

function FeatureCard({ feature, index }: { feature: FeatureCardData; index: number }) {
  // Springs driven by motion values: the tilt follows the cursor without a
  // React re-render on every mousemove.
  const rotateX = useSpring(0, TILT_SPRING);
  const rotateY = useSpring(0, TILT_SPRING);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const { openComingSoon } = useComingSoon();

  const isAvailable = FEATURES[feature.key].status === 'live';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    rotateX.set((y - rect.height / 2) / 10);
    rotateY.set((rect.width / 2 - x) / 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative"
    >
      <div
        className={`relative h-full rounded-2xl border p-8 transition-colors ${
          isAvailable
            ? 'border-white/10 bg-white/5 hover:bg-white/10'
            : 'border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05]'
        }`}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
          aria-hidden="true"
        />

        {/* Icon — dimmed for capabilities that aren't usable yet */}
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${
            feature.gradient
          } transition-transform duration-300 group-hover:scale-110 ${
            isAvailable ? '' : 'opacity-50'
          }`}
        >
          <Icon className="h-7 w-7 text-white" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3
            className={`text-xl font-semibold ${
              isAvailable ? 'text-white' : 'text-white/75'
            }`}
          >
            {feature.title}
          </h3>
          {!isAvailable && <ComingSoonBadge size="sm" />}
        </div>

        <p className={isAvailable ? 'text-white/60' : 'text-white/45'}>
          {feature.description}
        </p>

        {!isAvailable && (
          <button
            type="button"
            onClick={() => openComingSoon({ feature: feature.title })}
            className="mt-5 rounded-full px-1 text-sm font-medium text-[#7BB8E8] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
          >
            Learn what's coming
          </button>
        )}

        {/* Hover glow effect */}
        <div
          className={`absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative bg-black py-24"
    >
      <SparkleOverlay count={6} color="#0ea5e9" style="subtle" />

      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1E63C6]/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            id="features-heading"
            className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Modern Finance
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/60">
            Everything you need to manage your money day to day — with more on the
            way. Features marked Coming Soon are still in development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.key} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
