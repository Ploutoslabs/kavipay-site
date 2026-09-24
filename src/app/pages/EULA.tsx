import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';

export default function EULA() {
  const sections = [
    {
      title: '1. License Grant',
      content: 'Subject to your compliance with this EULA, KaviPay grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the KaviPay mobile application for your personal, non-commercial use.',
    },
    {
      title: '2. License Restrictions',
      content: 'You shall not: copy, modify, or create derivative works of the application; reverse engineer, decompile, or disassemble the application; remove any proprietary notices from the application; use the application for any commercial purpose; rent, lease, lend, sell, or redistribute the application.',
    },
    {
      title: '3. Ownership',
      content: 'The application and all rights, including intellectual property rights, are and shall remain the property of KaviPay. This EULA does not grant you any rights to trademarks or service marks of KaviPay.',
    },
    {
      title: '4. Updates and Maintenance',
      content: 'KaviPay may provide updates, patches, and bug fixes for the application. You understand that the application may require updates to continue functioning properly and that some updates may affect your ability to use the application.',
    },
    {
      title: '5. User Accounts',
      content: 'To use certain features of the application, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    },
    {
      title: '6. Privacy',
      content: 'Your use of the application is subject to KaviPay\'s Privacy Policy. By using the application, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.',
    },
    {
      title: '7. User Content',
      content: 'You retain ownership of any content you submit through the application. By submitting content, you grant KaviPay a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing the services.',
    },
    {
      title: '8. Prohibited Conduct',
      content: 'You agree not to: use the application for any illegal purpose; interfere with or disrupt the application or servers; attempt to gain unauthorized access to any part of the application; transmit viruses, malware, or other harmful code; harass, abuse, or harm other users.',
    },
    {
      title: '9. Third-Party Services',
      content: 'The application may contain links to third-party websites or services. KaviPay is not responsible for the content, privacy policies, or practices of any third-party websites or services.',
    },
    {
      title: '10. Disclaimers',
      content: 'THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. KAVIPAY DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
    },
    {
      title: '11. Limitation of Liability',
      content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, KAVIPAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APPLICATION.',
    },
    {
      title: '12. Indemnification',
      content: 'You agree to indemnify and hold harmless KaviPay from any claims, damages, losses, liabilities, and expenses arising from your use of the application or violation of this EULA.',
    },
    {
      title: '13. Termination',
      content: 'This EULA is effective until terminated. KaviPay may terminate this EULA at any time if you fail to comply with its terms. Upon termination, you must cease all use of the application and delete all copies.',
    },
    {
      title: '14. Export Compliance',
      content: 'You agree to comply with all applicable export and import laws and regulations. You shall not export or re-export the application to any prohibited country or person.',
    },
    {
      title: '15. Governing Law',
      content: 'This EULA shall be governed by and construed in accordance with the laws of the jurisdiction in which KaviPay operates, without regard to its conflict of law provisions.',
    },
    {
      title: '16. Dispute Resolution',
      content: 'Any disputes arising from this EULA shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
    },
    {
      title: '17. Severability',
      content: 'If any provision of this EULA is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.',
    },
    {
      title: '18. Entire Agreement',
      content: 'This EULA constitutes the entire agreement between you and KaviPay regarding the application and supersedes all prior agreements and understandings.',
    },
    {
      title: '19. Changes to This EULA',
      content: 'KaviPay reserves the right to modify this EULA at any time. We will notify you of any material changes by posting the new EULA in the application.',
    },
    {
      title: '20. Contact Information',
      content: 'If you have questions about this EULA, please contact us at legal@kavipay.io',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="End User License Agreement (EULA)"
        subtitle="Last Updated: February 16, 2026"
      />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <p className="text-white/60 mb-0">
                This End User License Agreement ("EULA") is a legal agreement between you and KaviPay Inc. ("KaviPay") for the use of the KaviPay mobile application and related services. By installing or using the application, you agree to be bound by the terms of this EULA.
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
                    {section.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
