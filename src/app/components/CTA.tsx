import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Apple, Smartphone, Download } from "lucide-react";
import SparkleOverlay from "./SparkleOverlay";

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
                Ready to Start Your
                <br />
                Crypto Journey?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join thousands of users who are already spending their crypto in
                the real world
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com/ng/app/kavipay/id6759305057"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center space-x-3 px-8 py-4 bg-white text-[#1E63C6] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <Apple className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs text-[#1E63C6]/80">
                        Download on the
                      </div>
                      <div className="font-bold">App Store</div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>

                {/* APK Download Button */}
                <a href="https://github.com/Ploutoslabs/kavipay-site/releases/latest/download/kavipay.apk">
                  <motion.button
                    className="group flex items-center space-x-3 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-black/80 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <Download className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs text-white/80">Download</div>
                      <div className="font-bold">Android APK</div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>

                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.kavipay.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center space-x-3 px-8 py-4 bg-white text-[#1E63C6] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}>
                    <Smartphone className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs text-[#1E63C6]/80">Get it on</div>
                      <div className="font-bold">Google Play</div>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40"
                      />
                    ))}
                  </div>
                  <span className="text-sm">75K users</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm">4.9 rating</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
