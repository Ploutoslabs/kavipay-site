import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { CreditCard, Shield, Zap, Globe, Check } from 'lucide-react';

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: CreditCard,
      title: 'Virtual & Physical Cards',
      description: 'Access both virtual and physical cards instantly. Use virtual cards for online purchases and physical cards for in-store shopping.',
    },
    {
      icon: Zap,
      title: 'Instant Conversions',
      description: 'Convert crypto to fiat in real-time with competitive exchange rates and zero hidden fees.',
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Spend your crypto anywhere in the world where cards are accepted. Over 40 million merchants worldwide.',
    },
    {
      icon: Shield,
      title: 'Multi-Currency Support',
      description: 'Support for Bitcoin, Ethereum, USDT, and 50+ other cryptocurrencies in one wallet.',
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
            Everything you need to seamlessly spend your crypto in the real world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#1476B8]/50 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
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
              {['Instant issuance', 'Free forever', 'Create multiple cards', 'Freeze/unfreeze anytime'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white/80">
                  <Check className="w-5 h-5 text-[#1476B8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Get Virtual Card
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Physical Card</h3>
            <p className="text-white/60 mb-6">Premium metal card for everyday spending</p>
            <ul className="space-y-3 mb-8">
              {['Premium metal design', 'Global acceptance', 'Contactless payments', 'ATM withdrawals'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-white/80">
                  <Check className="w-5 h-5 text-[#0F8A8C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
              Order Physical Card
            </button>
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
            <h3 className="text-2xl font-bold text-white mb-6">Compliance & Certifications</h3>
            <p className="text-white/60 mb-8">
              KaviPay is fully compliant with international financial regulations and holds multiple security certifications to ensure we meet the highest standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['PCI DSS Level 1', 'SOC 2 Type II', 'ISO 27001', 'GDPR Compliant'].map((cert, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-white font-semibold">{cert}</div>
                </div>
              ))}
            </div>
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
