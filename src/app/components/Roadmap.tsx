import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Clock } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';
import { ComingSoonBadge } from './ComingSoonBadge';
import { FEATURES } from '../config/features';
import type { FeatureKey } from '../config/features';

/**
 * Replaces the previous vanity-metrics band. Instead of claiming numbers we
 * cannot evidence, this states plainly what ships today and what is being
 * built — which is the more useful signal for someone deciding to trust us.
 *
 * Both columns read from `config/features.ts`, so this section can never drift
 * out of sync with the badges on the feature cards.
 */

const LIVE_KEYS: FeatureKey[] = [
  'virtualCards',
  'physicalCards',
  'wallet',
  'nairaFunding',
  'billPayments',
  'withdrawals',
  'kyc',
];

const IN_DEVELOPMENT_KEYS: FeatureKey[] = [
  'cryptoFunding',
  'globalAcceptance',
  'multiCurrencyWallet',
  'realTimeRates',
];

function FeatureRow({
  featureKey,
  index,
  isInView,
  live,
}: {
  featureKey: FeatureKey;
  index: number;
  isInView: boolean;
  live: boolean;
}) {
  const feature = FEATURES[featureKey];
  const Icon = live ? Check : Clock;

  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
      className="flex items-start gap-4"
    >
      <span
        className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${
          live
            ? 'bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C]'
            : 'border border-[#1476B8]/40 bg-[#1476B8]/10'
        }`}
        aria-hidden="true"
      >
        <Icon className={`h-3.5 w-3.5 ${live ? 'text-white' : 'text-[#7BB8E8]'}`} />
      </span>

      <span>
        <span
          className={`block font-medium ${live ? 'text-white' : 'text-white/70'}`}
        >
          {feature.label}
        </span>
        {feature.blurb && (
          <span className="mt-0.5 block text-sm text-white/50">{feature.blurb}</span>
        )}
      </span>
    </motion.li>
  );
}

export function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="relative overflow-hidden bg-black py-24"
    >
      <SparkleOverlay count={5} color="#0ea5e9" style="subtle" />

      {/* Gradient hairlines, carried over from the section this replaced */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1476B8] to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0F8A8C] to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            id="roadmap-heading"
            className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Built for Today.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Ready for Tomorrow.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/60">
            Exactly what you can use right now, and exactly what we're building next.
            No guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Live now */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Live Now
              </h3>
            </div>

            <ul className="space-y-5">
              {LIVE_KEYS.map((key, index) => (
                <FeatureRow
                  key={key}
                  featureKey={key}
                  index={index}
                  isInView={isInView}
                  live
                />
              ))}
            </ul>
          </motion.div>

          {/* In development */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                In Development
              </h3>
              <ComingSoonBadge size="sm" />
            </div>

            <ul className="space-y-5">
              {IN_DEVELOPMENT_KEYS.map((key, index) => (
                <FeatureRow
                  key={key}
                  featureKey={key}
                  index={index}
                  isInView={isInView}
                  live={false}
                />
              ))}
            </ul>

            {/* Deliberately does not claim "none of these work yet" —
                crypto funding is de-promoted, not missing. See features.ts. */}
            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/40">
              These are in active development. We'll announce each one as it
              becomes generally available.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
