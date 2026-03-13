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
              Today, we serve over 500,000 users across 50+ countries, processing billions in transactions annually. Our team of fintech experts, blockchain developers, and security professionals work tirelessly to provide the best crypto spending experience.
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

function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openings = [
    { title: 'Senior Backend Engineer', department: 'Engineering', location: 'Remote' },
    { title: 'Product Designer', department: 'Design', location: 'San Francisco, CA' },
    { title: 'Compliance Officer', department: 'Legal', location: 'New York, NY' },
    { title: 'Customer Success Manager', department: 'Support', location: 'Remote' },
  ];

  return (
    <section id="careers" className="py-24 bg-black">
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
              Careers
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join our team and help shape the future of finance
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Open Positions</h3>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1476B8]/50 transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-[#1476B8] transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-sm text-white/60">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1E63C6]/10 to-[#0F8A8C]/10 border border-[#1476B8]/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Why Work at KaviPay?</h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            We offer competitive salaries, equity packages, comprehensive benefits, and a remote-first culture that values work-life balance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['Remote First', 'Equity', 'Health Benefits', 'Unlimited PTO'].map((benefit, i) => (
              <div key={i} className="text-white/80">
                <div className="text-3xl mb-2">✨</div>
                <div className="font-semibold">{benefit}</div>
              </div>
            ))}
          </div>
        </motion.div>
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
                <span className="text-white/60">Email:</span> press@kavipay.io
              </div>
              <div>
                <span className="text-white/60">Phone:</span> +1 (555) 123-4567
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Press Releases</h3>
          <div className="space-y-4">
            {[
              { title: 'KaviPay Surpasses 500,000 Users Worldwide', date: 'February 1, 2026' },
              { title: 'KaviPay Launches Physical Card Program', date: 'January 15, 2026' },
              { title: 'KaviPay Secures $50M Series B Funding', date: 'December 10, 2025' },
            ].map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1476B8]/50 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start gap-4">
                  <h4 className="text-xl font-semibold text-white">{release.title}</h4>
                  <span className="text-sm text-white/40 whitespace-nowrap">{release.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
      <CareersSection />
      <PressSection />
      <Footer />
    </div>
  );
}
