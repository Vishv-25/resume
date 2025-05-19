import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-gray-400 pt-12 pb-8 border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6 mb-4">
          <a href="#" className="text-white text-xl font-bold tracking-widest">VK</a>
          <a href="https://github.com/Vishv-25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/vishv-magarvadia-8a6495263" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
        </div>
        <div className="text-xs uppercase tracking-widest text-center">© {currentYear} Vishv Magarvadia. All rights reserved.</div>
        <a href="#home" className="mt-2 px-6 py-2 rounded-full bg-blue-400 text-navy-900 font-bold text-xs uppercase tracking-widest shadow hover:bg-blue-500 transition">Scroll to Top</a>
      </div>
    </footer>
  );
};

export default Footer;