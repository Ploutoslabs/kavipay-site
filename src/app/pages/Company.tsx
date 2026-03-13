import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Target, Users, Briefcase, Newspaper } from 'lucide-react';

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 bg-black">
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
              About Us
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            KaviPay is on a mission to bridge the gap between cryptocurrency and everyday spending
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-white/60 mb-6">
              Founded in 2025, KaviPay was born from a simple idea: cryptocurrency should be as easy to spend as traditional money. We saw the disconnect between the digital asset revolution and everyday transactions, and we set out to solve it.
            </p>
            <p className="text-white/60 mb-6">
              Our team of fintech experts, blockchain developers, and security professionals work tirelessly to provide the best crypto spending experience.
            </p>
            <p className="text-white/60">
              We believe in financial freedom, transparency, and innovation. KaviPay is more than a product—it's a movement towards a more inclusive financial future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Target, label: 'Mission-Driven', value: '100%' },
              { icon: Users, label: 'Active Users', value: '75K' },
              { icon: Briefcase, label: 'Countries', value: '50+' },
              { icon: Newspaper, label: 'Daily Transactions', value: '50K+' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PressSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="press" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
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
              Press
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Media resources and latest press releases
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Press Kit</h3>
            <p className="text-white/60 mb-6">
              Download our brand assets, logos, and company information for press and media purposes.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Download Press Kit
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Media Contact</h3>
            <p className="text-white/60 mb-6">
              For media inquiries, interviews, or press-related questions, please contact our PR team.
            </p>
            <div className="space-y-3 text-white/80">
              <div>
                <span className="text-white/60">Email:</span> support@kavipay.io
              </div>
              <div>
                <span className="text-white/60">0700 call Kavipay:</span> 0700 2255 5284729
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Company() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Company"
        subtitle="Learn more about KaviPay and our mission"
      />
      <AboutSection />
      <PressSection />
      <Footer />
    </div>
  );
}
