import { useState, useEffect, useRef } from 'react';
import { Linkedin, Github, X as Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Geometric, "A"-inspired VK logo
const VKLogo = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left V shape */}
    <polygon points="7,6 19,38 23,38 11,6" fill="black" />
    {/* Right K shape */}
    <polygon points="37,6 25,38 21,38 33,6" fill="black" />
  </svg>
);

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' }
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ticking = useRef(false);

  // Hide navbar only when footer is in view
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
          setShowNavbar(false); // Hide when footer is visible
          return;
        }
      }
      setShowNavbar(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy logic
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 80; // offset for navbar height
      let current = 'home';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          className="w-full flex justify-center pt-6 pb-2 fixed top-0 left-0 z-50"
        >
          <nav
            className="w-[95vw] max-w-5xl flex items-center justify-between rounded-3xl bg-white/70 dark:bg-navy-800/80 px-6 py-3 border border-navy-200 dark:border-navy-700 backdrop-blur-md"
            style={{ boxShadow: '0 4px 32px 0 rgba(255,255,255,0.14), 0 1.5px 8px 0 rgba(16,185,129,0.04)' }}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center justify-center">
              <VKLogo />
            </a>
            {/* Nav Links */}
            <ul className="flex-1 flex justify-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className={`text-xl font-sans font-extrabold tracking-wide px-1 transition-colors duration-200 ${active === link.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-navy-900 dark:text-white/60 font-normal'} hover:text-emerald-600 dark:hover:text-emerald-400`}
                    style={{ letterSpacing: '0.01em' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/vishv-magarvadia-8a6495263" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-100/40 dark:hover:bg-white/10 transition">
                <Linkedin size={22} strokeWidth={2} className="text-navy-900 dark:text-white" />
              </a>
              <a href="https://github.com/Vishv-25" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-100/40 dark:hover:bg-white/10 transition">
                <Github size={22} strokeWidth={2} className="text-navy-900 dark:text-white" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-emerald-100/40 dark:hover:bg-white/10 transition">
                <Twitter size={22} strokeWidth={2} className="text-navy-900 dark:text-white" />
              </a>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;