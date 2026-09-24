import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Download } from 'lucide-react';

export default function Terms() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Terms & Conditions"
        subtitle="Last Updated: February 9, 2026 | Effective Date: February 9, 2026"
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-end mb-8 print:hidden"
          >
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="terms-content"
          >
            {/* Header */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
                KAVIPAY.IO TERMS AND CONDITIONS
              </h1>
              <p className="text-center text-white/60 mb-6">
                Last Updated: February 9, 2026<br />
                Effective Date: February 9, 2026
              </p>
              <p className="text-center text-white/80 font-semibold">
                THIS IS AN IMPORTANT LEGAL DOCUMENT. PLEASE READ IT CAREFULLY.
              </p>
            </div>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                1. ACCEPTANCE OF TERMS
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>
                  These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and PloutosLabs International Ltd, a company incorporated in Nigeria (trading as "Kavipay.io," "Kavipay," "we," "us," or "our").
                </p>
                <p>
                  These Terms govern your access to and use of Kavipay's virtual card services, physical card services (including Verve and Afrigo cards), VISA and Mastercard virtual card programs, mobile applications, website, and all related services (collectively, the "Services").
                </p>
                <p>
                  By creating an account, accessing our Services, or using any Kavipay card, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, EULA, and Cookies Policy. If you do not agree to these Terms, you must immediately cease using our Services.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                2. DEFINITIONS
              </h2>
              <div className="text-white/60 leading-relaxed space-y-3">
                <p>• <span className="text-white font-semibold">"Account"</span> means your Kavipay user account created to access our Services.</p>
                <p>• <span className="text-white font-semibold">"Card"</span> means any virtual or physical payment card issued through Kavipay, including VISA, Mastercard, Verve, and Afrigo cards.</p>
                <p>• <span className="text-white font-semibold">"Virtual Card"</span> means a digital payment card accessible through the Kavipay app for online and contactless transactions.</p>
                <p>• <span className="text-white font-semibold">"Physical Card"</span> means a tangible payment card (Verve or Afrigo) delivered to your registered address.</p>
                <p>• <span className="text-white font-semibold">"Transaction"</span> means any payment, purchase, withdrawal, or transfer made using your Card.</p>
                <p>• <span className="text-white font-semibold">"Service Providers"</span> means Safe Haven MFB, Sudo.africa, Payscribe, and Speedaf Logistics.</p>
                <p>• <span className="text-white font-semibold">"KYC"</span> means Know Your Customer verification processes as required by Nigerian law.</p>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                3. ELIGIBILITY AND ACCOUNT REGISTRATION
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3.1 Eligibility Requirements</h3>
                  <p className="mb-3">To use Kavipay Services, you must:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Be at least 18 years of age</li>
                    <li>• Be a resident of Nigeria or another jurisdiction where our Services are available</li>
                    <li>• Have the legal capacity to enter into binding contracts</li>
                    <li>• Possess a valid government-issued identification document</li>
                    <li>• Provide accurate and complete registration information</li>
                    <li>• Comply with all applicable Nigerian laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Creation</h3>
                  <p>
                    To create an Account, you must complete our registration process, which includes providing personal information, verifying your identity through our KYC procedures (including NIN, BVN, or other government-issued ID), and agreeing to these Terms. We reserve the right to reject any Account application at our sole discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3.3 Account Security</h3>
                  <p className="mb-3">You are responsible for:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Maintaining the confidentiality of your login credentials, PINs, and passwords</li>
                    <li>• All activities that occur under your Account</li>
                    <li>• Immediately notifying us of any unauthorized access or security breach</li>
                    <li>• Not sharing your Account access with any third party</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                4. SERVICES AND CARD ISSUANCE
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.1 Card Issuance Through Partners</h3>
                  <p className="mb-3">
                    Kavipay provides payment card services through licensed partnerships with regulated financial institutions and service providers. Your Cards are issued and managed through:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• <span className="text-white font-semibold">Safe Haven Microfinance Bank (MFB)</span> - Licensed by the Central Bank of Nigeria (CBN) for banking and card issuance services</li>
                    <li>• <span className="text-white font-semibold">Sudo.africa</span> - PCI DSS compliant fintech provider for VISA and Mastercard virtual card programs</li>
                    <li>• <span className="text-white font-semibold">Payscribe</span> - PCI DSS compliant card provisioning service under service level agreement</li>
                    <li>• <span className="text-white font-semibold">Speedaf Logistics</span> - Licensed logistics provider for physical card delivery (local and international)</li>
                  </ul>
                  <p className="mt-3">
                    By using Kavipay Services, you acknowledge and agree that your relationship with these Service Providers is governed by their respective terms and conditions, and you may be subject to additional fees, restrictions, or requirements imposed by these partners.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.2 Types of Cards</h3>
                  <p className="mb-3"><span className="text-white font-semibold">Virtual Cards (VISA and Mastercard):</span></p>
                  <ul className="space-y-2 ml-4 mb-4">
                    <li>• Instant issuance through the Kavipay app</li>
                    <li>• Available for online shopping and contactless payments</li>
                    <li>• Compatible with Apple Pay, Google Pay, and other digital wallets</li>
                    <li>• Subject to transaction limits as determined by our Service Providers</li>
                  </ul>
                  <p className="mb-3"><span className="text-white font-semibold">Physical Cards (Verve and Afrigo):</span></p>
                  <ul className="space-y-2 ml-4">
                    <li>• Delivered to your registered address via Speedaf Logistics</li>
                    <li>• Available for ATM withdrawals, POS transactions, and online payments</li>
                    <li>• Subject to delivery timelines and geographic availability</li>
                    <li>• May incur additional delivery and activation fees</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                5. FEES AND CHARGES
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>
                  You agree to pay all applicable fees associated with your use of Kavipay Services, including but not limited to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Card issuance fees (virtual and physical)</li>
                  <li>• Monthly or annual maintenance fees</li>
                  <li>• Transaction fees (domestic and international)</li>
                  <li>• ATM withdrawal fees</li>
                  <li>• Currency conversion fees</li>
                  <li>• Card replacement fees</li>
                  <li>• Delivery fees for physical cards</li>
                  <li>• Inactivity fees (if applicable)</li>
                  <li>• Fees imposed by our Service Providers and payment networks</li>
                </ul>
                <p>
                  All fees are disclosed on our website and within the Kavipay app before you complete a transaction. We reserve the right to modify our fee schedule with 30 days' prior notice. Continued use of our Services after fee changes constitutes acceptance of the new fees.
                </p>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                6. FUNDING AND TRANSACTIONS
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>
                  You may fund your Card through bank transfers, card-to-card transfers, cryptocurrency deposits, or other methods approved by Kavipay. All Transactions are subject to:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Available balance verification</li>
                  <li>• Daily and monthly transaction limits</li>
                  <li>• Merchant acceptance and payment network rules</li>
                  <li>• Fraud prevention and security checks</li>
                  <li>• Compliance with CBN regulations and anti-money laundering (AML) laws</li>
                </ul>
                <p>
                  You authorize Kavipay and our Service Providers to debit your Card for all authorized Transactions, including recurring payments, fees, and adjustments. Transactions cannot be reversed or cancelled once authorized, except as required by law or payment network rules.
                </p>
              </div>
            </motion.div>

            {/* Section 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                7. PROHIBITED ACTIVITIES
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>You may NOT use Kavipay Services for:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Illegal activities, including money laundering, terrorism financing, or fraud</li>
                  <li>• Purchasing illegal goods or services</li>
                  <li>• Gambling or betting in jurisdictions where prohibited</li>
                  <li>• Adult content or services</li>
                  <li>• Circumventing currency controls or sanctions</li>
                  <li>• Operating accounts on behalf of third parties without disclosure</li>
                  <li>• Structuring transactions to evade reporting requirements</li>
                  <li>• Any activity that violates Nigerian law or international regulations</li>
                </ul>
                <p>
                  Violation of these prohibitions may result in immediate Account suspension or termination, Card cancellation, fund freezing, and reporting to law enforcement authorities including EFCC and INTERPOL.
                </p>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                8. COMPLIANCE AND REGULATORY OBLIGATIONS
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>Kavipay operates in compliance with:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Central Bank of Nigeria (CBN) regulations</li>
                  <li>• Nigeria Data Protection Regulation (NDPR)</li>
                  <li>• Money Laundering (Prevention and Prohibition) Act</li>
                  <li>• Cybercrimes (Prohibition, Prevention, etc.) Act</li>
                  <li>• PCI DSS standards (through our partners Sudo.africa and Payscribe)</li>
                  <li>• All applicable payment card network rules (VISA, Mastercard, Verve, Afrigo)</li>
                </ul>
                <p>
                  You agree to provide all information and documentation reasonably requested by Kavipay or our Service Providers to ensure compliance with these regulations. Failure to cooperate may result in service suspension or termination.
                </p>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                9. LIMITATION OF LIABILITY
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p className="font-semibold text-white">
                  TO THE MAXIMUM EXTENT PERMITTED BY NIGERIAN LAW, KAVIPAY, PLOUTOSLABS INTERNATIONAL LTD, AND OUR SERVICE PROVIDERS (SAFE HAVEN MFB, SUDO.AFRICA, PAYSCRIBE, SPEEDAF LOGISTICS) SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Service interruptions or downtime</li>
                  <li>• Unauthorized access to your Account due to your negligence</li>
                  <li>• Merchant refusal to accept your Card</li>
                  <li>• Disputes with merchants regarding goods or services</li>
                  <li>• Loss or delay in physical card delivery</li>
                  <li>• Acts of God, war, terrorism, or government action</li>
                  <li>• Indirect, incidental, special, or consequential damages</li>
                </ul>
                <p>
                  Our maximum aggregate liability for any claims arising from these Terms shall not exceed the total fees paid by you in the 12 months preceding the claim.
                </p>
              </div>
            </motion.div>

            {/* Section 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                10. DISPUTE RESOLUTION AND GOVERNING LAW
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these Terms shall be resolved through:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <span className="text-white font-semibold">Step 1:</span> Good faith negotiation between the parties</li>
                  <li>• <span className="text-white font-semibold">Step 2:</span> Mediation at the Lagos Multi-Door Courthouse (LMDC) or equivalent mediation center</li>
                  <li>• <span className="text-white font-semibold">Step 3:</span> Arbitration under the Arbitration and Mediation Act 2023, conducted in Lagos, Nigeria</li>
                </ul>
                <p>
                  If arbitration fails or is not applicable, disputes shall be submitted to the exclusive jurisdiction of the Nigerian courts.
                </p>
              </div>
            </motion.div>

            {/* Section 11 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                11. TERMINATION
              </h2>
              <div className="text-white/60 leading-relaxed space-y-4">
                <p>
                  We may suspend or terminate your Account and Services at any time, with or without notice, for any reason including:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Violation of these Terms</li>
                  <li>• Suspected fraud or illegal activity</li>
                  <li>• Non-compliance with KYC/AML requirements</li>
                  <li>• Regulatory directive or legal obligation</li>
                  <li>• Inactivity for an extended period</li>
                </ul>
                <p>
                  Upon termination, your remaining Card balance (if any) will be returned to you after deducting applicable fees and charges, subject to regulatory clearances and freeze periods.
                </p>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="bg-gradient-to-br from-[#1E63C6]/10 to-[#0F8A8C]/10 border border-[#1476B8]/20 rounded-2xl p-8 text-center"
            >
              <p className="text-white/80 mb-6">
                By using Kavipay Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <p className="text-white/60 mb-4">
                For questions or concerns about these Terms, contact us at <a href="mailto:legal@kavipay.io" className="text-[#1476B8] hover:underline">legal@kavipay.io</a>
              </p>
              <p className="text-white/40 text-sm">
                © 2026 PloutosLabs International Ltd. All Rights Reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .terms-content {
            color: black !important;
          }
          
          .bg-white\\/5,
          .bg-gradient-to-br {
            background: white !important;
            border: 1px solid #e5e7eb !important;
          }
          
          .text-white {
            color: black !important;
          }
          
          .text-white\\/60,
          .text-white\\/80,
          .text-white\\/40 {
            color: #4b5563 !important;
          }
          
          .bg-gradient-to-r {
            background: linear-gradient(to right, #1E63C6, #0F8A8C) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          
          nav, footer {
            display: none !important;
          }
          
          .rounded-2xl {
            border-radius: 8px !important;
          }
          
          section {
            padding: 20px !important;
          }
          
          h1 {
            font-size: 24px !important;
            margin-bottom: 16px !important;
          }
          
          h2 {
            font-size: 18px !important;
            margin-bottom: 12px !important;
            page-break-after: avoid !important;
          }
          
          h3 {
            font-size: 16px !important;
            margin-bottom: 8px !important;
          }
          
          p, li {
            font-size: 12px !important;
            line-height: 1.6 !important;
          }
          
          .bg-white\\/5 {
            page-break-inside: avoid !important;
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
