/**
 * External destinations used across the site.
 *
 * Kept in one place so a store listing or app URL is never hardcoded in two
 * components that can drift apart.
 */

export const APP_STORE_URL = 'https://apps.apple.com/ng/app/kavipay/id6759305057';

export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.kavipay.app';

/** Web app — the "Get Started" destination. */
export const WEB_APP_URL = 'https://app.kavipay.io/';

const REFERRAL_CODE_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

/**
 * A referral link on the web app, or null when the code is malformed.
 *
 * The host is always the web app; the code only ever fills the last path
 * segment. vercel.json carries the same pattern for direct page loads.
 */
export function appReferralUrl(code: string | undefined | null): string | null {
  if (typeof code !== 'string' || !REFERRAL_CODE_PATTERN.test(code)) return null;
  return `${WEB_APP_URL}r/${encodeURIComponent(code)}`;
}

export const SUPPORT_EMAIL = 'support@kavipay.io';
