import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import { Search, MessageCircle, BookOpen, AlertCircle } from "lucide-react";
import { useState } from "react";

const helpTopics = [
  {
    icon: MessageCircle,
    title: "Cards & Payments",
    description: "Virtual & physical cards, transactions, and card controls.",
    questions: [
      "What types of cards does Kavipay offer?",
      "How quickly do I get my virtual card?",
      "Can I freeze or block my card?",
    ],
    faqCategory: "Cards & Payments",
  },
  {
    icon: BookOpen,
    title: "Funding Your Card",
    description: "Crypto deposits, bank transfers, and exchange rates.",
    questions: [
      "How can I fund my Kavipay card?",
      "What cryptocurrencies are supported?",
      "How long does crypto funding take?",
    ],
    faqCategory: "Funding & Transactions",
  },
  {
    icon: AlertCircle,
    title: "Bill Payments & Utilities",
    description: "Electricity, airtime, data, cable TV, and utilities.",
    questions: [
      "What bills can I pay through Kavipay?",
      "Are bill payments instant?",
      "What if my bill payment fails?",
    ],
    faqCategory: "Bill Payments & Utilities",
  },
  {
    icon: MessageCircle,
    title: "Account & KYC",
    description: "Registration, verification levels, and documents.",
    questions: [
      "How do I create a Kavipay account?",
      "What documents do I need for KYC?",
      "How long does verification take?",
    ],
    faqCategory: "Getting Started",
  },
  {
    icon: BookOpen,
    title: "Security & Privacy",
    description: "Data protection, fraud prevention, and safety tips.",
    questions: [
      "Is Kavipay safe to use?",
      "How is my data protected?",
      "What should I do if I notice suspicious activity?",
    ],
    faqCategory: "Security & Privacy",
  },
  {
    icon: AlertCircle,
    title: "Troubleshooting",
    description: "Fix common issues with transactions, login, and more.",
    questions: [
      "My transaction is pending. What should I do?",
      "I can't log into my account.",
      "My card was declined.",
    ],
    faqCategory: "Troubleshooting",
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredTopics = helpTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleTopicClick = (faqCategory: string) => {
    navigate(`/faq?category=${encodeURIComponent(faqCategory)}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Help Center"
        subtitle="Find answers and solutions to your questions"
      />

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Help Topics Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleTopicClick(topic.faqCategory)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {topic.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    {topic.description}
                  </p>
                  <div className="space-y-2">
                    {topic.questions.map((q, idx) => (
                      <p
                        key={idx}
                        className="text-white/50 text-xs hover:text-white/70 transition-colors">
                        • {q}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredTopics.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12">
              <p className="text-white/60">
                No help topics found. Try a different search.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
              Still need help?
            </h2>
            <p className="text-white/70 mb-6">
              Our support team is here for you 24/7. Choose your preferred way
              to reach us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:support@kavipay.io"
                className="px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Email Support
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/10">
                Live Chat
              </a>
              <a
                href="/knowledge-base"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/10">
                Knowledge Base
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
