import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { appReferralUrl, WEB_APP_URL } from './links';

describe('appReferralUrl', () => {
  it('points a well-formed code at the web app', () => {
    expect(appReferralUrl('ABC123')).toBe('https://app.kavipay.io/r/ABC123');
    expect(appReferralUrl('482913')).toBe('https://app.kavipay.io/r/482913');
    expect(appReferralUrl('Tolu_2-b')).toBe('https://app.kavipay.io/r/Tolu_2-b');
    expect(appReferralUrl('a'.repeat(64))).toBe(`https://app.kavipay.io/r/${'a'.repeat(64)}`);
  });

  it('is null for a malformed code', () => {
    for (const code of ['', undefined, null, 'a'.repeat(65), 'a b', 'a/b', 'a?x=1', 'a#b', '<script>', 'é']) {
      expect(appReferralUrl(code)).toBeNull();
    }
  });

  it('never leaves the web app host', () => {
    for (const code of ['//evil.example', '@evil.example', 'evil.example', '..', '%2F%2Fevil.example', 'https:evil']) {
      const url = appReferralUrl(code);
      if (url !== null) expect(new URL(url).origin).toBe(new URL(WEB_APP_URL).origin);
    }
    expect(appReferralUrl('//evil.example')).toBeNull();
    expect(appReferralUrl('@evil.example')).toBeNull();
    expect(appReferralUrl('evil.example')).toBeNull();
  });
});

describe('vercel.json referral redirects', () => {
  const { redirects } = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
    redirects: { source: string; destination: string; permanent: boolean }[];
  };

  it('send well-formed links to the web app with a temporary redirect', () => {
    expect(redirects).toEqual([
      {
        source: '/referral/:code([A-Za-z0-9_-]{1,64})',
        destination: 'https://app.kavipay.io/r/:code',
        permanent: false,
      },
      {
        source: '/r/:slug([A-Za-z0-9_-]{1,64})',
        destination: 'https://app.kavipay.io/r/:slug',
        permanent: false,
      },
      { source: '/referral', destination: '/', permanent: false },
    ]);
  });

  it('use the web app origin from the links config', () => {
    for (const { destination } of redirects.filter((r) => r.destination !== '/')) {
      expect(destination.startsWith(`${WEB_APP_URL}r/:`)).toBe(true);
    }
  });
});
