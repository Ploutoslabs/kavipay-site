import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../assets/kavi-logo-dark.png";

const navItems = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Cards", id: "cards" },
  { label: "Security", id: "security" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  /**
   * These sections only exist on the homepage. Previously every nav item was a
   * no-op on /help, /faq, /contact and friends — the click simply did nothing.
   * Off-home we route back to "/" with the hash and let RootLayout scroll.
   */
  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" aria-label="KaviPay home">
            <motion.img
              src={Logo}
              alt="KaviPay"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="text-white/80 hover:text-white transition-colors relative group text-left bg-none border-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8] rounded"
                whileHover={{ y: -2 }}>
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />
              </motion.button>
            ))}
          </div>

          {/* Primary actions - hidden on mobile, shown in the menu instead */}
          <div className="hidden sm:flex items-center gap-4">
            <motion.button
              type="button"
              onClick={() => handleNavClick("cta")}
              className="px-4 py-2 sm:px-6 sm:py-2.5 bg-white/5 border border-white/20 text-white rounded-full font-medium text-sm sm:text-base transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Download App
            </motion.button>
            <a
              href="https://app.kavipay.io/"
              target="_blank"
              rel="noopener noreferrer">
              <motion.span
                className="inline-block px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] text-white rounded-full font-medium text-sm sm:text-base transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(30, 99, 198, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}>
                Get Started
              </motion.span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1476B8] rounded"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden pb-4 bg-black/80 backdrop-blur-md border-b border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-white/80 hover:text-white transition-colors bg-none border-none cursor-pointer">
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("cta")}
              className="w-full mt-4 px-6 py-2.5 bg-white/5 border border-white/20 text-white rounded-full font-medium">
              Download App
            </button>
            <a
              href="https://app.kavipay.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block">
              <span className="block w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] text-white rounded-full font-medium text-center">
                Get Started
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
