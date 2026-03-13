import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { AlertTriangle, Trash2, Mail, Clock, Loader2 } from 'lucide-react';
import { useState } from 'react';

const API_BASE = 'https://mining-api-123lfk.ploutoslabs.io';

export default function DeleteAccount() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setError('');
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return;

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/account/delete-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          reason: formData.reason || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setConfirmDelete(true);
    } catch {
      setError('Unable to reach the server. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Delete Account"
        subtitle="Permanently delete your Kavipay account"
      />

      {/* Warning Section */}
      <section className="py-12 bg-red-500/10 border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start space-x-4"
          >
            <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-400 mb-2">Account Deletion is Permanent</h2>
              <p className="text-white/70">
                Deleting your account will permanently remove all data associated with your Kavipay
                account, including cards, transaction history, and balance. This action cannot be
                undone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-white"
          >
            Before You Delete
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {[
              {
                title: 'Withdraw Your Funds',
                description:
                  'Make sure to withdraw or transfer all remaining balance before deleting your account.',
              },
              {
                title: 'Cancel Active Subscriptions',
                description:
                  'Any active recurring payments or subscriptions will be cancelled upon account deletion.',
              },
              {
                title: 'Save Important Data',
                description:
                  'Download your transaction history and other important records before deletion.',
              },
              {
                title: 'Freeze Your Cards',
                description:
                  'All associated virtual and physical cards will be immediately deactivated and cannot be reused.',
              },
              {
                title: 'Legal Obligations',
                description:
                  'We may retain limited transaction data for compliance and legal requirements for 7 years.',
              },
              {
                title: '6-Month Reactivation Period',
                description:
                  'You have 30 days to request account recovery. After that, the deletion is permanent.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Deletion Form */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!confirmDelete ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <Trash2 className="w-8 h-8 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Request Account Deletion</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Reason for Deletion (Optional)
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  >
                    <option value="">Select a reason...</option>
                    <option value="privacy">Privacy concerns</option>
                    <option value="unused">No longer using the service</option>
                    <option value="found-alternative">Found an alternative service</option>
                    <option value="expensive">Too expensive</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 accent-red-500"
                    />
                    <span className="text-sm text-white/80">
                      I understand that deleting my account is permanent and cannot be undone. All
                      my data, cards, and balance will be permanently removed. I have withdrawn all
                      funds and cancelled active subscriptions.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: formData.agree && !submitting ? 1.02 : 1 }}
                  whileTap={{ scale: formData.agree && !submitting ? 0.98 : 1 }}
                  type="submit"
                  disabled={!formData.agree || submitting}
                  className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center ${
                    formData.agree && !submitting
                      ? 'bg-red-600 hover:bg-red-700 text-white cursor-pointer'
                      : 'bg-red-600/50 text-white/50 cursor-not-allowed'
                  }`}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Delete My Account'
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Deletion Request Received</h2>
              <p className="text-white/70 mb-6">
                We've received your account deletion request. A confirmation email has been sent to{' '}
                <span className="font-semibold text-white">{formData.email}</span>.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8 text-left">
                <div className="flex items-start space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Next Steps</h3>
                    <ol className="text-white/70 text-sm space-y-2">
                      <li>1. Check your email for a confirmation link</li>
                      <li>2. Click the link to confirm account deletion</li>
                      <li>3. Your account will be deleted within 24-48 hours</li>
                      <li>4. You have 30 days to request recovery</li>
                    </ol>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-sm mb-6">
                If you change your mind, you can cancel the deletion within 24 hours by clicking
                the link in your confirmation email.
              </p>

              <button
                onClick={() => {
                  setConfirmDelete(false);
                  setFormData({ email: '', reason: '', agree: false });
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              Have Questions About Account Deletion?
            </h2>
            <p className="text-white/70 mb-6">
              Our support team is here to help. Contact us if you have any concerns.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
