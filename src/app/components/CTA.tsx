import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Apple, Play, ShieldCheck, BadgeCheck, Wallet } from "lucide-react";
import SparkleOverlay from "./SparkleOverlay";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../config/links";

/**
 * Trust signals shown under the download buttons.
 *
 * These replaced an invented "75K users" avatar cluster and a "4.9 rating"
 * star row. Everything here is verifiable: the app is a free download, KYC is
 * required to transact, and card processing runs through PCI DSS compliant
 * partners.
 */
const TRUST_SIGNALS = [
  { icon: Wallet, label: "Free to download" },
  { icon: BadgeCheck, label: "KYC-verified accounts" },
  { icon: ShieldCheck, label: "PCI DSS compliant partners" },
];

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="cta" className="relative py-24 bg-black overflow-hidden">
      <SparkleOverlay count={10} color="#3b82f6" style="pulse" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseMove={handleMouseMove}>
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] rounded-3xl overflow-hidden">
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3), transparent 40%)`,
              }}
            />

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Get Your
                <br />
                Kavipay Card?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Create your account, complete verification, and start spending in
                minutes
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* App Store */}
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <motion.span
                    className="group flex items-center space-x-3 px-8 py-4 bg-white text-[#1E63C6] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <Apple className="w-6 h-6" aria-hidden="true" />
                    <div className="text-left">
                      <div className="text-xs text-[#1E63C6]/80">
                        Download on the
                      </div>
                      <div className="font-bold">App Store</div>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.span>
                </a>

                {/* Google Play */}
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                  <motion.span
                    className="group flex items-center space-x-3 px-8 py-4 bg-white text-[#1E63C6] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <Play className="w-6 h-6 fill-current" aria-hidden="true" />
                    <div className="text-left">
                      <div className="text-xs text-[#1E63C6]/80">Get it on</div>
                      <div className="font-bold">Google Play</div>
                    </div>
                    <ArrowRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.span>
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/80">
                {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-white/70" aria-hidden="true" />
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
