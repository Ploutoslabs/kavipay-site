import { motion, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function Waitlist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const container = document.getElementById('bitrix-waitlist-container');

    if (container && !container.hasChildNodes()) {
      const script = document.createElement('script');
      script.src =
        'https://crm.ploutoslabs.io/upload/crm/form/loader_9_wxby27.js';
      script.async = true;
      script.setAttribute('data-b24-form', 'inline/9/wxby27');
      script.setAttribute('data-skip-moving', 'true');

      container.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">

      {/* Header */}
      <Navigation />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#1E63C6]/30 via-[#1476B8]/25 to-[#0F8A8C]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F8A8C]/30 via-[#1476B8]/25 to-[#1E63C6]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-28">
        <div ref={ref} className="max-w-2xl w-full text-center">

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-[#1476B8]" />
              <span className="text-sm text-white/80">Be Among the First</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Join the
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
                KaviPay Waitlist
              </span>
            </h1>

            <p className="text-white/60 mb-12">
              Early access. Priority cards. Exclusive rewards.
            </p>

            {/* Bitrix Container */}
            <div className="bg-black border border-white/10 rounded-2xl p-8">
              <div id="bitrix-waitlist-container"></div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Early Access', 'Priority Cards', 'Exclusive Perks'].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-5"
                  >
                    <CheckCircle className="w-6 h-6 text-[#1476B8] mx-auto mb-3" />
                    <h3 className="font-semibold">{item}</h3>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer (always last) */}
      <Footer />

      {/* Force Bitrix Dark Theme Override.
          Plain <style>: the `jsx global` attributes are a Next.js styled-jsx
          idiom and this is a Vite app, so React was warning about them. */}
      <style>{`
        .b24-form {
          background: black !important;
        }
        .b24-form-wrapper {
          background: black !important;
        }
        .b24-form-content {
          background: black !important;
        }
        .b24-form-control {
          background: #111 !important;
          color: white !important;
          border-color: #222 !important;
        }
      `}</style>

    </div>
  );
}