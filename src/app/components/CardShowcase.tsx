import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Smartphone, CreditCard as CreditCardIcon } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';

import physicalCardImg from '../../assets/kavi_visual.png';
import card2Img from '../../assets/card2.png';

export function CardShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<'virtual' | 'physical' | null>(null);

  return (
    <section id="cards" className="relative py-24 bg-black overflow-hidden">
      <SparkleOverlay count={8} color="#06b6d4" style="flowing" />

      {/* Background blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E63C6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F8A8C]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Your Crypto,
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Your Way
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose between virtual cards for instant online payments or physical cards for everyday spending
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Virtual Card - Full Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard('virtual')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <div className="relative aspect-[1.586/1] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={card2Img}
                alt="Virtual Card"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-[#1476B8]" />
                <span>Virtual Card</span>
              </h3>
              <p className="text-white/60 mb-4">
                Get instant access to a virtual card. Perfect for online shopping, subscriptions, and digital payments.
              </p>
            </motion.div>
          </motion.div>

          {/* Physical Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard('physical')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <div className="relative aspect-[1.586/1] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={physicalCardImg}
                alt="Physical Card"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-2">
                <CreditCardIcon className="w-6 h-6 text-[#0F8A8C]" />
                <span>Physical Card</span>
              </h3>
              <p className="text-white/60 mb-4">
                Premium metal card delivered to your door. Use it anywhere cards are accepted worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}