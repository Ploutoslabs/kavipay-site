import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { useComingSoon } from '../components/ComingSoonProvider';
import {
  HelpCircle,
  Code,
  Activity,
  Search,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

function HelpCenterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Each topic maps onto a real FAQ category, so these cards now lead
  // somewhere instead of only looking clickable.
  const topics = [
    { icon: HelpCircle, title: 'Getting Started', faqCategory: 'Getting Started' },
    { icon: MessageCircle, title: 'Cards & Payments', faqCategory: 'Cards & Payments' },
    { icon: Code, title: 'Funding & Transactions', faqCategory: 'Funding & Transactions' },
    { icon: Activity, title: 'Security & Privacy', faqCategory: 'Security & Privacy' },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section id="help-center" className="py-24 bg-black">
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
              Help Center
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search help topics..."
                aria-label="Search help topics"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#1476B8]/50 transition-all"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.button
                key={topic.title}
                type="button"
                onClick={() =>
                  navigate(`/faq?category=${encodeURIComponent(topic.faqCategory)}`)
                }
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1476B8]/50 transition-all cursor-pointer group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-white/60 text-sm inline-flex items-center gap-1">
                  Read answers
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </p>
              </motion.button>
            );
          })}
        </div>

        {filteredTopics.length === 0 && (
          <p className="text-center text-white/60 py-12">
            No topics matched your search. Try a different term.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
          <p className="text-white/60 mb-6">
            Our support team is available 24/7 to assist you
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with KaviPay in minutes',
      items: ['Create Account', 'Verify Identity', 'Fund with Naira', 'Get Your Card'],
    },
    {
      title: 'User Guides',
      description: 'Comprehensive guides for all KaviPay features',
      items: ['Virtual Cards', 'Physical Cards', 'Funding & Withdrawals', 'Transaction History'],
    },
    {
      title: 'Security',
      description: 'Learn how to keep your account secure',
      items: ['Two-Factor Auth', 'Biometric Login', 'Card Controls', 'Fraud Prevention'],
    },
  ];

  return (
    <section id="documentation" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
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
              Documentation
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            What each part of KaviPay covers. For step-by-step answers, see the{' '}
            <Link to="/faq" className="text-[#7BB8E8] underline underline-offset-4">
              FAQ
            </Link>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
              <p className="text-white/60 mb-6">{section.description}</p>
              {/* Presented as a plain list: these are topics covered, not links,
                  so they no longer imply a click that goes nowhere. */}
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-white/80">
                    <div
                      className="w-1.5 h-1.5 bg-[#1476B8] rounded-full flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function APISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { openComingSoon } = useComingSoon();

  return (
    <section id="api" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
                API Documentation
              </span>
            </h2>
            <ComingSoonBadge />
          </div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A public API for building on top of KaviPay is in development. It is
            not available yet — the example below shows the shape we're working
            towards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Planned Capabilities</h3>
            <p className="text-white/60 mb-6">
              Once released, our RESTful API will let you programmatically manage
              cards, process transactions and access account data.
            </p>
            <div className="space-y-4">
              {['Authentication', 'Card Management', 'Transactions', 'Webhooks'].map(
                (item) => (
                  <div key={item} className="flex items-center space-x-3 text-white/70">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-full flex items-center justify-center opacity-60 flex-shrink-0">
                      <Code className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-6 border border-white/10"
          >
            <div className="text-sm text-white/60 mb-2">
              Illustrative example — endpoint not yet live
            </div>
            <pre className="text-[#1476B8] text-sm overflow-x-auto">
{`curl -X POST https://api.kavipay.io/v1/cards \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "virtual",
    "currency": "USD"
  }'`}
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button
            type="button"
            onClick={() =>
              openComingSoon({
                feature: 'Public API',
                message:
                  'Our public developer API is still in development and is not accepting requests yet. Join the waitlist to get early access when it launches.',
              })
            }
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
          >
            <span>View Full API Docs</span>
            <ComingSoonBadge size="sm" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StatusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const systems = ['Mobile & Web App', 'Card Processing', 'Virtual Cards', 'Bill Payments'];

  return (
    <section id="status" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
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
              System Status
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Current availability of KaviPay services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
              aria-hidden="true"
            />
            <span className="text-2xl font-bold text-white">All Systems Operational</span>
          </div>
          <p className="text-white/60">No active service incidents</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {systems.map((system, index) => (
            <motion.div
              key={system}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center space-x-4"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-white">{system}</h3>
                <p className="text-sm text-white/60">Operational</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/status"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
          >
            <span>View full status page</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Resources"
        subtitle="Everything you need to get the most out of KaviPay"
      />
      <HelpCenterSection />
      <DocumentationSection />
      <APISection />
      <StatusSection />
      <Footer />
    </div>
  );
}
