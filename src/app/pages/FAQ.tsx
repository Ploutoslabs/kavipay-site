import { motion } from "motion/react";
import { useSearchParams } from "react-router";
import { Navigation } from "../components/Navigation";
import { PageHeader } from "../components/PageHeader";
import { Footer } from "../components/Footer";
import { ChevronDown, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is Kavipay?",
        a: "Kavipay is Nigeria\u2019s trusted payment card app that makes managing your money simple and secure. We offer instant virtual VISA and Mastercard cards for global online spending, as well as physical Verve and Afrigo cards for local Nigerian transactions. You can fund your cards with cryptocurrency or Naira and use them for shopping, subscriptions, bill payments, and more.",
      },
      {
        q: "Who operates Kavipay?",
        a: "Kavipay is operated by PloutosLabs International Ltd, a Nigerian fintech company. We work in partnership with licensed financial institutions including Safe Haven Microfinance Bank (CBN Licensed), Sudo.africa (PCI DSS Compliant), and Payscribe (PCI DSS Compliant) to provide our services.",
      },
      {
        q: "What services does Kavipay offer?",
        a: "Kavipay offers virtual cards that work globally, physical cards for Nigeria, bill payments, crypto funding, bank transfers, and smart money tools for budgeting and spending insights.",
      },
      {
        q: "Is Kavipay available only in Nigeria?",
        a: "While we started in Nigeria, Kavipay is available to users globally. Virtual cards work worldwide, and physical cards are currently available in Nigeria with expansion planned.",
      },
      {
        q: "How do I create a Kavipay account?",
        a: "You can create a Kavipay account by downloading our app or visiting our website. Follow the simple registration process, provide your basic information, and complete KYC verification to get started.",
      },
      {
        q: "What documents do I need for KYC?",
        a: "For KYC verification, you typically need a valid government-issued ID (passport, national ID, or driver's license), proof of address, and a selfie. Check the app for the complete list of accepted documents.",
      },
      {
        q: "How long does verification take?",
        a: "Most KYC verifications complete within minutes. In some cases, additional review may take up to 24 hours. You'll receive a notification once your account is fully verified.",
      },
    ],
  },
  {
    category: "Cards & Payments",
    questions: [
      {
        q: "What types of cards does Kavipay offer?",
        a: "We offer instant virtual cards that work with Apple Pay and Google Pay, plus physical Visa/Mastercard cards. Virtual cards are available immediately, physical cards take 3-5 business days.",
      },
      {
        q: "How quickly do I get my virtual card?",
        a: "Virtual cards are issued instantly after account verification. You can start using them in seconds with Apple Pay, Google Pay, or online merchants.",
      },
      {
        q: "Can I freeze or block my card?",
        a: "Yes! You have full control over your card. Freeze it with a single tap in the app, and unfreeze when needed. You can also set transaction limits and block certain merchant categories.",
      },
    ],
  },
  {
    category: "Funding & Transactions",
    questions: [
      {
        q: "How can I fund my Kavipay card?",
        a: "You can fund your card through Cryptocurrency via BEP20 network using USDT, BUSD, BNB, and other supported tokens, or through Bank Transfer with direct Naira transfers from your Nigerian bank account. More funding options and blockchain networks are coming soon..",
      },
      {
        q: "What cryptocurrencies are supported?",
        a: "Currently supported cryptocurrencies via BEP20 network include USDT (Tether), BUSD (Binance USD), BNB (Binance Coin), and additional tokens available on the BEP20 network. More blockchain networks and tokens are being added.",
      },
      {
        q: "How long does crypto funding take?",
        a: "Cryptocurrency deposits are typically credited within minutes once confirmed on the blockchain. The exact time depends on network congestion. You\u2019ll receive a notification when your funds are available.",
      },
      {
        q: "What exchange rate do you use for crypto?",
        a: "We use competitive real-time market rates with transparent pricing. The exact exchange rate is displayed before you confirm any transaction, so there are no hidden fees or surprises.",
      },
      {
        q: "Is there a minimum or maximum funding amount?",
        a: "Yes, there are minimum and maximum limits for funding, which vary based on your verification level. These limits are displayed in the app. Higher verification levels unlock higher transaction limits.",
      },
      {
        q: "Can I withdraw funds back to my bank or crypto wallet?",
        a: "Yes, you can withdraw your card balance back to your linked bank account or cryptocurrency wallet. Withdrawal fees and processing times are displayed before you confirm the transaction.",
      },
    ],
  },
  {
    category: "Bill Payments & Utilities",
    questions: [
      {
        q: "What bills can I pay through Kavipay?",
        a: "You can pay electricity bills (all major DISCOs including AEDC, EKEDC, IBEDC, PHED, and others), mobile airtime (MTN, Glo, Airtel, 9mobile), internet/data bundles (all major providers), cable TV (DStv, GOtv, Startimes), and water bills and other utilities.",
      },
      {
        q: "Are bill payments instant?",
        a: "Yes, most bill payments are processed instantly. You\u2019ll receive confirmation and a receipt immediately after successful payment. Electricity tokens are delivered within seconds.",
      },
      {
        q: "Can I save my bill payment details?",
        a: "Yes! You can save your meter numbers, account numbers, and other payment details for quick repeat transactions. This makes paying regular bills faster and more convenient.",
      },
      {
        q: "What if my bill payment fails?",
        a: "If a payment fails, your funds are automatically reversed to your Kavipay balance. If you don\u2019t see the reversal within 24 hours, please contact support@kavipay.io with your transaction details.",
      },
    ],
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "Is Kavipay safe to use?",
        a: "Yes, Kavipay employs bank-level security measures including 256-bit encryption for all data, biometric authentication (fingerprint and Face ID), two-factor authentication (2FA), PCI DSS compliance through our partners, real-time fraud monitoring, and instant transaction alerts.",
      },
      {
        q: "How is my data protected?",
        a: "Your data is protected through end-to-end encryption, secure data centers, compliance with Nigeria Data Protection Regulation (NDPR), regular security audits, and strict access controls. We never share your personal information without your consent except as required by law.",
      },
      {
        q: "What should I do if I notice suspicious activity?",
        a: "Immediately freeze your card in the app, change your password, contact support@kavipay.io or use in-app chat, and review your recent transactions. We have 24/7 fraud monitoring and will work with you to resolve any issues.",
      },
      {
        q: "Will Kavipay ever ask for my password or PIN?",
        a: "NO. Kavipay will NEVER ask for your password, PIN, or OTP via email, phone, or social media. Any such request is a scam. Always access your account only through the official Kavipay app.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My transaction is pending. What should I do?",
        a: "Most transactions complete within minutes. If still pending after 1 hour, check your internet connection and try again. If the issue persists, contact support.",
      },
      {
        q: "I can't log into my account.",
        a: 'Try resetting your password using the "Forgot Password" option. Ensure you have internet connectivity. Contact support if you need additional help.',
      },
      {
        q: "My card was declined.",
        a: "Common reasons: insufficient funds, transaction limit exceeded, or merchant category blocked. Check your available balance and transaction limits in the app.",
      },
    ],
  },
];

export default function FAQ() {
  const [searchParams] = useSearchParams();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  // Auto-expand category from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setExpandedCategory(decodeURIComponent(category));
    }
  }, [searchParams]);

  const toggleQuestion = (id: string) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about Kavipay"
      />

      {/* FAQ Categories */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4">
            {faqs.map((faqSection, sectionIdx) => (
              <motion.div
                key={faqSection.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}>
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === faqSection.category
                        ? null
                        : faqSection.category,
                    )
                  }
                  className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all">
                  <h2 className="text-xl font-semibold text-white">
                    {faqSection.category}
                  </h2>
                  <ChevronDown
                    className={`w-6 h-6 text-white/60 transition-transform ${
                      expandedCategory === faqSection.category
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* Questions */}
                {expandedCategory === faqSection.category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2">
                    {faqSection.questions.map((item, idx) => {
                      const itemId = `${faqSection.category}-${idx}`;
                      return (
                        <motion.div
                          key={itemId}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}>
                          <button
                            onClick={() => toggleQuestion(itemId)}
                            className="w-full flex items-start justify-between p-4 bg-white/2 hover:bg-white/5 border border-white/5 rounded-xl transition-all text-left">
                            <span className="font-medium text-white">
                              {item.q}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-white/60 flex-shrink-0 ml-4 transition-transform ${
                                expandedQuestion === itemId ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {expandedQuestion === itemId && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 p-4 bg-white/5 border border-white/10 rounded-xl">
                              <p className="text-white/70 leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
              Didn't find your answer?
            </h2>
            <p className="text-white/70 mb-6">
              Our support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@kavipay.io"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/10">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
