import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { CERTIFICATIONS, FEATURES } from '../config/features';
import type { FeatureKey } from '../config/features';
import { CreditCard, Shield, Zap, Globe, Check } from 'lucide-react';

const APP_URL = 'https://app.kavipay.io/';

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features: {
    key: FeatureKey;
    icon: typeof CreditCard;
    title: string;
    description: string;
  }[] = [
    {
      key: 'virtualCards',
      icon: CreditCard,
      title: 'Virtual & Physical Cards',
      description:
        'Issue a virtual card instantly for online purchases, and order a physical card for in-store shopping and ATM withdrawals.',
    },
    {
      key: 'nairaFunding',
      icon: Zap,
      title: 'Naira Funding',
      description:
        'Transfer Naira directly from your Nigerian bank account and start spending in seconds. No hidden fees.',
    },
    {
      key: 'globalAcceptance',
      icon: Globe,
      title: 'Global Acceptance',
      description:
        'Worldwide merchant acceptance on every Kavipay card. This is in active development and is not available yet.',
    },
    {
      key: 'multiCurrencyWallet',
      icon: Shield,
      title: 'Multi-Currency Wallet',
      description:
        'Hold and manage multiple currencies side by side in a single wallet. Currently in development.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to spend and manage your money. Features marked
            Coming Soon are still in development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isAvailable = FEATURES[feature.key].status === 'live';

            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`backdrop-blur-sm border rounded-2xl p-8 hover:border-[#1476B8]/50 transition-all ${
                  isAvailable
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/[0.02] border-white/[0.07]'
                }`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-xl flex items-center justify-center mb-6 ${
                    isAvailable ? '' : 'opacity-50'
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3
                    className={`text-2xl font-semibold ${
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="cards" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Cards
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the perfect card for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Virtual Card</h3>
            <p className="text-white/60 mb-6">Perfect for online shopping and digital subscriptions</p>
            <ul className="space-y-3 mb-8">
              {[
                'Issued instantly after verification',
                'VISA & Mastercard',
                'Freeze or unfreeze in one tap',
                'Set limits and block merchant categories',
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-white/80">
                  <Check className="w-5 h-5 text-[#1476B8] flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Get Virtual Card
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Physical Card</h3>
            <p className="text-white/60 mb-6">A card in your wallet for everyday spending</p>
            <ul className="space-y-3 mb-8">
              {[
                'Verve & Afrigo cards',
                'In-store payments and ATM withdrawals',
                'Delivered to your address',
                'Freeze or unfreeze in one tap',
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-white/80">
                  <Check className="w-5 h-5 text-[#0F8A8C] flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-center hover:bg-white/20 transition-colors"
            >
              Order Physical Card
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="security" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Your security is our top priority
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Enterprise-Grade Protection</h3>
            <p className="text-white/60 mb-8">
              We employ multiple layers of security to ensure your funds and data are always protected. Our infrastructure is built with the highest security standards in the industry.
            </p>
            <ul className="space-y-4">
              {['AES-256 Encryption', 'Two-Factor Authentication', 'Biometric Security', 'Cold Storage', 'Real-time Fraud Detection'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white/80">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-white">Compliance Roadmap</h3>
              <ComingSoonBadge size="sm" />
            </div>
            <p className="text-white/60 mb-8">
              We're working towards the certifications below. They are not yet in
              place — we'll update this page as each one is achieved. The security
              controls listed opposite are live today.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert}
                  className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.07] rounded-xl p-4 text-center"
                >
                  <div className="text-white/70 font-semibold">{cert}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-[#7BB8E8]/70">
                    In progress
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Product() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Product"
        subtitle="Discover all the features and benefits of KaviPay"
      />
      <FeaturesSection />
      <CardsSection />
      <SecuritySection />
      <Footer />
    </div>
  );
}
