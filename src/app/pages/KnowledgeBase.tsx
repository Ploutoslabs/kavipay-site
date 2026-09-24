import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { useComingSoon } from '../components/ComingSoonProvider';
import { Search, BookOpen, Zap, Shield, DollarSign, Settings } from 'lucide-react';
import { useState } from 'react';

// Each topic maps to a real FAQ category so these cards lead somewhere.
const knowledgeTopics = [
  {
    icon: Zap,
    title: 'Getting Started',
    description: 'Learn the basics of Kavipay and get your account set up',
    faqCategory: 'Getting Started',
    articles: [
      'How to create a Kavipay account',
      'Complete KYC verification',
      'Download and install the mobile app',
      'Set up your profile and preferences',
    ],
  },
  {
    icon: DollarSign,
    title: 'Card Services',
    description: 'Master virtual and physical card management',
    faqCategory: 'Cards & Payments',
    articles: [
      'Types of cards available',
      'How to issue a virtual card instantly',
      'Order a physical card',
      'Manage card limits and controls',
      'Freeze and unfreeze cards',
      'Update card settings',
    ],
  },
  {
    icon: Zap,
    title: 'Funding Methods',
    description: 'Explore ways to load funds into your account',
    faqCategory: 'Funding & Transactions',
    articles: [
      'Crypto deposit guide',
      'Bank transfer process',
      'Supported cryptocurrencies',
      'Exchange rate explanations',
      'Transaction fees and limits',
      'Withdrawal process',
    ],
  },
  {
    icon: DollarSign,
    title: 'Bill Payments',
    description: 'Pay utilities and bills instantly in Nigeria',
    faqCategory: 'Bill Payments & Utilities',
    articles: [
      'Airtime top-up guide',
      'Data bundle purchase',
      'Electricity bill payment',
      'Cable TV subscription',
      'Water bill payment',
      'Payment troubleshooting',
    ],
  },
  {
    icon: Shield,
    title: 'Security Framework',
    description: 'Understand how we protect your money',
    faqCategory: 'Security & Privacy',
    articles: [
      'Encryption and data protection',
      '3D Secure authentication',
      'Fraud detection system',
      'Real-time alerts and monitoring',
      'Card freeze feature',
      'Security best practices',
      'Compliance certifications',
    ],
  },
  {
    icon: Settings,
    title: 'Troubleshooting',
    description: 'Resolve common issues and problems',
    faqCategory: 'Troubleshooting',
    articles: [
      'Transaction pending resolution',
      'Card declined troubleshooting',
      'Login issues',
      'App crashes and bugs',
      'Verification problems',
      'Contact support',
    ],
  },
];

// Planned guides. None are published yet, so each card opens the Coming Soon
// modal rather than implying a readable article. Read-time estimates were
// removed because they described articles that do not exist.
const detailedGuides = [
  {
    title: 'Complete KYC Verification Guide',
    description: 'Step-by-step instructions for account verification',
  },
  {
    title: 'Security Best Practices',
    description: 'Tips to keep your Kavipay account secure',
  },
  {
    title: 'Global Payment Solutions',
    description: 'How to use Kavipay for international transactions',
  },
  {
    title: 'Understanding Exchange Rates',
    description: 'How currency conversion works on Kavipay',
  },
];

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { openComingSoon } = useComingSoon();

  const filteredTopics = knowledgeTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.articles.some((article) =>
        article.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Knowledge Base"
        subtitle="In-depth guides and reference documentation for all Kavipay services"
      />

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-4 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Knowledge Topics Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.button
                  key={topic.title}
                  type="button"
                  onClick={() =>
                    navigate(`/faq?category=${encodeURIComponent(topic.faqCategory)}`)
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{topic.description}</p>
                  <div className="space-y-2">
                    {topic.articles.slice(0, 3).map((article) => (
                      <p key={article} className="text-white/50 text-xs">
                        → {article}
                      </p>
                    ))}
                    <p className="text-white/40 text-xs pt-2">Open in FAQ →</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {filteredTopics.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-white/60">No articles found. Try a different search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                Featured Guides
              </h2>
              <ComingSoonBadge />
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're writing these in-depth guides now. Until they're published, the{' '}
              <span className="text-white/80">FAQ</span> covers the same ground.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {detailedGuides.map((guide, index) => (
              <motion.button
                key={guide.title}
                type="button"
                onClick={() =>
                  openComingSoon({
                    feature: guide.title,
                    message:
                      'This guide is still being written and is not published yet. Join the waitlist and we will let you know when our full guide library goes live.',
                  })
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <BookOpen
                    className="w-8 h-8 text-[#1E63C6] opacity-60 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <ComingSoonBadge size="sm" />
                </div>
                <h3 className="text-lg font-semibold text-white/80 mb-2">{guide.title}</h3>
                <p className="text-white/45 text-sm">{guide.description}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
