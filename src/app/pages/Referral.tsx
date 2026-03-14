import { useParams } from 'react-router';
import { Apple, Download, Smartphone, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const APP_STORE_URL = 'https://apps.apple.com/ng/app/kavipay/id6759305057';
const APK_URL = 'https://github.com/Ploutoslabs/kavipay-site/releases/download/v1.0.0/kavipay.apk';

export default function Referral() {
  const { code } = useParams<{ code: string }>();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] flex items-center justify-center">
            <span className="text-3xl">🎁</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {code ? "You've Been Invited!" : 'Join KaviPay'}
          </h1>
          <p className="text-white/70 text-lg mb-8">
            {code
              ? 'Someone invited you to join KaviPay — get virtual and physical cards, fund with crypto or naira, and pay bills.'
              : 'Get virtual and physical cards, fund with crypto or naira, and pay bills.'}
          </p>

          {/* Referral Code Display */}
          {code && (
            <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-sm text-white/50 mb-2">Your referral code</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-bold tracking-wider">{code}</span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/70" />
                  )}
                </button>
              </div>
              <p className="text-sm text-white/40 mt-2">
                Enter this code when signing up in the app
              </p>
            </div>
          )}

          {/* Download Buttons */}
          <div className="space-y-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-black/60">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </a>

            <a
              href={APK_URL}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/60">Download</div>
                <div className="font-bold">Android APK</div>
              </div>
            </a>

            {/* Google Play - Coming Soon */}
            <div className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/5 text-white/30 rounded-full font-semibold text-lg cursor-not-allowed">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/20">Coming Soon</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
