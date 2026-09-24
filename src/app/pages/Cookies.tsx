import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';

export default function Cookies() {
  const sections = [
    {
      title: '1. What Are Cookies',
      content: 'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
    },
    {
      title: '2. How We Use Cookies',
      content: 'We use cookies for various purposes including: remembering your preferences and settings; understanding how you use our services; improving your user experience; analyzing traffic and usage patterns; providing personalized content and advertisements.',
    },
    {
      title: '3. Types of Cookies We Use',
      content: 'Essential Cookies: Required for the website to function properly. Performance Cookies: Help us understand how visitors interact with our services. Functionality Cookies: Remember your preferences and personalize your experience. Targeting Cookies: Track your browsing habits to provide relevant advertisements.',
    },
    {
      title: '4. Essential Cookies',
      content: 'These cookies are necessary for the services to function and cannot be disabled. They include cookies that enable you to log into secure areas, use shopping carts, and make payments.',
    },
    {
      title: '5. Performance Cookies',
      content: 'These cookies collect information about how you use our services, such as which pages you visit most often. This data helps us optimize our services and troubleshoot any issues.',
    },
    {
      title: '6. Functionality Cookies',
      content: 'These cookies allow our services to remember choices you make (such as your language preference) and provide enhanced, personalized features.',
    },
    {
      title: '7. Targeting/Advertising Cookies',
      content: 'These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.',
    },
    {
      title: '8. Third-Party Cookies',
      content: 'We may also use third-party cookies from partners and service providers to help us analyze usage, provide social media features, and deliver targeted advertisements.',
    },
    {
      title: '9. Managing Cookies',
      content: 'You can control and manage cookies in various ways. Most browsers allow you to refuse cookies or delete specific cookies. However, please note that blocking all cookies may impact your user experience.',
    },
    {
      title: '10. Browser Settings',
      content: 'Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "Options" or "Preferences" menu of your browser.',
    },
    {
      title: '11. Mobile Devices',
      content: 'For mobile devices, you can manage cookie preferences through your device settings or through the app settings within the KaviPay mobile application.',
    },
    {
      title: '12. Do Not Track',
      content: 'Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. We currently do not respond to Do Not Track signals.',
    },
    {
      title: '13. Changes to This Policy',
      content: 'We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.',
    },
    {
      title: '14. Contact Us',
      content: 'If you have questions about our use of cookies, please contact us at privacy@kavipay.io',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Cookies Policy"
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
                This Cookies Policy explains how KaviPay Inc. ("we", "us", or "our") uses cookies and similar technologies when you use our services.
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
