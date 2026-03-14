import { useParams } from 'react-router';
import { Apple, Download, Smartphone, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const APP_STORE_URL = 'https://apps.apple.com/ng/app/kavipay/id6759305057';
const APK_URL = 'https://github.com/Ploutoslabs/kavipay-site/releases/download/v1.0.0/kavipay.apk';
const API_URL = 'https://mining-api-123lfk.ploutoslabs.io';

function DownloadButtons() {
  return (
    <div className="space-y-3 w-full">
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

      <div className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white/5 text-white/30 rounded-full font-semibold text-lg cursor-not-allowed">
        <Smartphone className="w-6 h-6" />
        <div className="text-left">
          <div className="text-xs text-white/20">Coming Soon</div>
          <div className="font-bold">Google Play</div>
        </div>
      </div>
    </div>
  );
}

export default function Referral() {
  const { code } = useParams<{ code: string }>();
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (form.name.length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          referralCode: code || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed. Please try again.');
        return;
      }

      setRegistered(true);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Success state — show download links
  if (registered) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold mb-3">You're In!</h1>
            <p className="text-white/70 text-lg mb-8">
              Account created successfully. Download the app and sign in with your email and password.
            </p>
            <DownloadButtons />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Registration form
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] flex items-center justify-center">
            <span className="text-3xl">🎁</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {code ? "You've Been Invited!" : 'Join KaviPay'}
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Get virtual and physical cards, fund with crypto or naira, and pay bills.
          </p>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm text-white/60 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1E63C6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1E63C6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="Create a password (min 8 chars)"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#1E63C6] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {code && (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-sm text-white/50">Referral:</span>
                <span className="text-sm font-semibold text-white">{code}</span>
              </div>
            )}

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <p className="text-white/30 text-xs mt-6">
            By creating an account, you agree to our{' '}
            <a href="/terms" className="text-white/50 underline">Terms of Service</a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-white/50 underline">Privacy Policy</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
