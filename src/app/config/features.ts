/**
 * Single source of truth for what Kavipay can actually do today.
 *
 * Every marketing surface on this site derives its claims from this file.
 * Rules:
 *   - `live`           the capability is shipped and usable right now.
 *   - `in-development` the capability is real product direction, but NOT usable
 *                      yet. It stays visible on the site, always carries a
 *                      Coming Soon badge, and any call to action attached to it
 *                      opens the shared Coming Soon modal instead of navigating.
 *
 * Never mark something `live` here without confirming it against the product.
 */

export type FeatureStatus = 'live' | 'in-development';

export interface Feature {
  /** Human-readable name used in badges, roadmap lists and modal copy. */
  label: string;
  status: FeatureStatus;
  /** Short supporting line, used by the roadmap section. */
  blurb?: string;
}

export const FEATURES: Record<string, Feature> = {
  // ---------------------------------------------------------------- live ---
  registration: {
    label: 'Account Registration',
    status: 'live',
    blurb: 'Create an account in minutes on web or iOS',
  },
  login: {
    label: 'Secure Login',
    status: 'live',
    blurb: 'Biometric and two-factor protected sign in',
  },
  kyc: {
    label: 'KYC Verification',
    status: 'live',
    blurb: 'Verify your identity and unlock higher limits',
  },
  wallet: {
    label: 'Kavipay Wallet',
    status: 'live',
    blurb: 'Hold your balance and move money in one place',
  },
  virtualCards: {
    label: 'Virtual Cards',
    status: 'live',
    blurb: 'Issued instantly for online payments',
  },
  physicalCards: {
    label: 'Physical Cards',
    status: 'live',
    blurb: 'Delivered to your address for everyday spending',
  },
  transactions: {
    label: 'Transaction History',
    status: 'live',
    blurb: 'Every payment tracked and receipted',
  },
  nairaFunding: {
    label: 'Naira Bank Transfers',
    status: 'live',
    blurb: 'Fund directly from a Nigerian bank account',
  },
  billPayments: {
    label: 'Bill Payments',
    status: 'live',
    blurb: 'Electricity, airtime, data and cable TV',
  },
  withdrawals: {
    label: 'Withdrawals',
    status: 'live',
    blurb: 'Move funds back to your bank account',
  },

  // ------------------------------------------------------ in development ---

  /**
   * DELIBERATE EXCEPTION to the rule above — read before changing.
   *
   * Crypto funding and crypto withdrawal BOTH work in production today. This
   * is marked `in-development` as a business decision to de-promote crypto on
   * marketing surfaces, not because the capability is missing.
   *
   * Consequences to preserve:
   *  - Marketing surfaces (hero, features, how-it-works, CTA, SEO metadata)
   *    must not lead with crypto.
   *  - Support documentation (FAQ, Help Center, Knowledge Base) MUST stay
   *    accurate. Existing customers rely on those instructions — do not strip
   *    the BEP20 / supported-token / deposit-timing answers.
   *
   * If crypto is ever promoted again, flip this to `live` and move the key
   * back into LIVE_KEYS in Roadmap.tsx.
   */
  cryptoFunding: {
    label: 'Crypto Funding',
    status: 'in-development',
    blurb: 'Top up from your crypto wallet',
  },
  globalAcceptance: {
    label: 'Global Acceptance',
    status: 'in-development',
    blurb: 'Worldwide merchant acceptance on every Kavipay card',
  },
  multiCurrencyWallet: {
    label: 'Multi-Currency Wallet',
    status: 'in-development',
    blurb: 'Hold and manage multiple currencies side by side',
  },
  realTimeRates: {
    label: 'Real-Time Rates',
    status: 'in-development',
    blurb: 'Live market pricing on every conversion',
  },

  // Non-feature surfaces, kept here so the site has one place to look up
  // "is this thing available?".
  googlePlay: { label: 'Google Play Release', status: 'live' },
  publicApi: { label: 'Public API', status: 'in-development' },
  pressKit: { label: 'Press Kit', status: 'in-development' },
  statusAlerts: { label: 'Status Alerts', status: 'in-development' },
  guides: { label: 'In-Depth Guides', status: 'in-development' },
};

export type FeatureKey = keyof typeof FEATURES;

/**
 * Security certifications Kavipay is working towards.
 *
 * NOT held today — every surface that lists these must present them as a
 * roadmap, never as achieved status. Note the labels are deliberately bare
 * ("PCI DSS", not "PCI DSS Compliant"): pairing an assertive verb with a
 * Coming Soon badge reads as a contradiction and invites a misread.
 *
 * This is separate from our partners' certifications. Statements about a
 * third party holding a certification are a different claim and are not
 * governed by this list.
 */
export const CERTIFICATIONS: string[] = [
  'PCI DSS',
  'SOC 2',
  'GDPR',
  'ISO 27001',
];

/** True when the capability is shipped and safe to advertise as usable. */
export function isLive(key: FeatureKey): boolean {
  return FEATURES[key]?.status === 'live';
}

/** Feature keys filtered by status, preserving declaration order. */
export function featuresByStatus(status: FeatureStatus): FeatureKey[] {
  return Object.keys(FEATURES).filter((key) => FEATURES[key].status === status);
}
