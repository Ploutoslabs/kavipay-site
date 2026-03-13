import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import Logo from '../../assets/Kavi-logo.png';

const footerLinks = {
  Product: [
    { name: 'Features', path: '#features' },
    { name: 'Cards', path: '#cards' },
    { name: 'Pricing', path: '/product#pricing' },
    { name: 'Security', path: '#security' },
  ],
  Company: [
    { name: 'About', path: '/company#about' },
    { name: 'Blog', path: '/company#blog' },
    { name: 'Careers', path: '/company#careers' },
    { name: 'Press', path: '/company#press' },
  ],
  Support: [
    { name: 'Help Center', path: '/help' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Knowledge Base', path: '/knowledge-base' },
    { name: 'Partnership', path: '/partnership' },
    { name: 'Contact', path: '/contact' },
    { name: 'Status', path: '/status' },
    { name: 'Delete Account', path: '/delete-account' },
  ],
  Legal: [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookies Policy', path: '/cookies' },
    { name: 'EULA', path: '/eula' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/Kavipay', label: 'X' },
  { icon: Mail, href: 'mailto:support@kavipay.io', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/">
              <img
                src={Logo}
                alt="KaviPay"
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-white/60 mb-6 max-w-xs">
              Bridge the gap between crypto and traditional finance with KaviPay.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/60" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 KaviPay. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/40">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white/60 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}