import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { useComingSoon } from '../components/ComingSoonProvider';
import { CheckCircle, AlertCircle, Info, Mail } from 'lucide-react';

/**
 * This page reports service availability only.
 *
 * It deliberately carries no uptime percentages and no incident history: we do
 * not yet publish automated monitoring data, and quoting figures we cannot
 * evidence is exactly the problem this page used to have.
 */
const statusItems = [
  {
    service: 'Mobile & Web App',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'iOS app and web app available',
  },
  {
    service: 'Virtual Cards',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Card issuance and management available',
  },
  {
    service: 'Physical Cards',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Card requests and delivery available',
  },
  {
    service: 'Payments Processing',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Card transactions processing normally',
  },
  {
    service: 'Naira Funding',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Bank transfers available',
  },
  {
    service: 'Bill Payments',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Electricity, airtime, data and cable TV available',
  },
  {
    service: 'KYC Verification',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Identity verification processing normally',
  },
  {
    service: 'Customer Support',
    status: 'operational',
    statusLabel: 'Operational',
    description: '24/7 support channels available',
  },
];

export default function Status() {
  const { openComingSoon } = useComingSoon();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="System Status"
        subtitle="Current availability of Kavipay services"
      />

      {/* Status Overview */}
      <section className="py-12 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />
              <span className="text-2xl font-bold">All Systems Operational</span>
            </div>
            <p className="text-white/70 max-w-xl mx-auto">
              Every Kavipay service listed below is currently available.
            </p>

            <div className="flex items-start justify-center gap-3 pt-6 border-t border-white/10 mt-6 text-left max-w-xl mx-auto">
              <Info
                className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-sm text-white/50 leading-relaxed">
                This page is reviewed and updated manually by our team. We don't
                publish automated uptime metrics yet. If you're experiencing an
                issue that isn't reflected here, please tell us — we'd rather hear
                it from you than miss it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Status Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Service Availability
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {statusItems.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div>
                      {item.status === 'operational' ? (
                        <CheckCircle
                          className="w-6 h-6 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <AlertCircle
                          className="w-6 h-6 text-yellow-500"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.service}
                      </h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                      item.status === 'operational'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {item.statusLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Incident History
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <CheckCircle
              className="w-10 h-10 text-green-500 mx-auto mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold text-white mb-3">
              No active incidents
            </h3>
            <p className="text-white/60 max-w-lg mx-auto mb-8">
              There are no ongoing service incidents. When something does go wrong,
              we'll post it here and email affected users directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:support@kavipay.io"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>Report an issue</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  openComingSoon({
                    feature: 'Status Alerts',
                    message:
                      'Email and push notifications for service status updates are being built. Join the waitlist and we will enable them for you first.',
                  })
                }
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
              >
                <span>Subscribe to updates</span>
                <ComingSoonBadge size="sm" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
