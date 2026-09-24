import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Mail, MessageSquare, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactChannel {
  icon: typeof Mail;
  title: string;
  description: string;
  details: string;
  action?: string;
  link?: string;
  /** Shown instead of a button when there is no destination to link to. */
  hint?: string;
}

const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    title: 'Email Support',
    description: "Send us a message and we'll get back to you within 24 hours",
    details: 'support@kavipay.io',
    action: 'Send Email',
    link: 'mailto:support@kavipay.io',
  },
  {
    // The chat widget loads on every page, so this points at it rather than
    // offering a button that used to link to "#" and do nothing.
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team in real time',
    details: 'Available 24/7',
    hint: 'Open the chat bubble in the bottom corner of any page',
  },
  {
    icon: Phone,
    title: 'In-App Support',
    description: 'Access support directly from your Kavipay account',
    details: '24/7 Live Chat',
    action: 'Open Kavipay',
    link: 'https://app.kavipay.io/',
  },
  {
    icon: Clock,
    title: 'Complaints Department',
    description: 'File a formal complaint for unresolved issues',
    details: 'complaints@kavipay.io',
    action: 'File Complaint',
    link: 'mailto:complaints@kavipay.io',
  },
];

const SUBJECT_OPTIONS = [
  { value: 'billing', label: 'Billing & Payments' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'security', label: 'Security Issue' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
];

const specializedContacts = [
  {
    category: 'Data Protection Officer',
    description: 'For privacy concerns and data protection inquiries',
    email: 'dpo@kavipay.io',
  },
  {
    category: 'Security Issues',
    description: 'Report security vulnerabilities and suspicious activity',
    email: 'security@kavipay.io',
  },
  {
    category: 'Privacy Inquiries',
    description: 'Questions about our privacy policy and data handling',
    email: 'privacy@kavipay.io',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * There is no backend endpoint behind this form. It previously logged to the
   * console and cleared itself, so users believed a message had been sent when
   * nothing left the browser. It now composes a real email instead.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subjectLabel =
      SUBJECT_OPTIONS.find((option) => option.value === formData.subject)?.label ??
      'General enquiry';

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${subjectLabel}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:support@kavipay.io?subject=${encodeURIComponent(
      `[${subjectLabel}] Message from ${formData.name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our support team. We're here to help!"
      />

      {/* Contact Methods Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] p-3 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{channel.description}</p>
                  <p className="text-white/80 font-medium text-sm mb-4">{channel.details}</p>
                  {channel.link ? (
                    <a
                      href={channel.link}
                      {...(channel.link.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                    >
                      {channel.action}
                    </a>
                  ) : (
                    <p className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-lg text-sm">
                      {channel.hint}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-white/60 mb-8">
              Fill out the form below and we'll open a pre-filled email to our support
              team. We reply as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                >
                  <option value="">Select a subject...</option>
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>Compose Message</span>
              </motion.button>

              <p className="text-center text-xs text-white/40">
                This opens your email app with the details filled in. Prefer to write
                directly? Email{' '}
                <a
                  href="mailto:support@kavipay.io"
                  className="text-white/60 underline underline-offset-4"
                >
                  support@kavipay.io
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Specialized Contacts */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Specialized Contacts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {specializedContacts.map((contact, index) => (
              <motion.div
                key={contact.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{contact.category}</h3>
                    <p className="text-white/60 text-sm">{contact.description}</p>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="ml-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {contact.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
