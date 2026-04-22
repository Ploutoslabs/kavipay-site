import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import Logo from "../../assets/Kavi-logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = ["Features", "How It Works", "Cards", "Security"];

  return (
    <motion.nav
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
          <Link to="/">
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
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white/80 hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          {/* Get Started button - hidden on mobile, visible on larger screens */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://app.kavipay.io/"
              target="_blank"
              rel="noopener noreferrer">
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] text-white rounded-full font-medium text-sm sm:text-base transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(30, 99, 198, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}>
                Get Started
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a
              href="https://app.kavipay.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block">
              <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] text-white rounded-full font-medium">
                Get Started
              </button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
