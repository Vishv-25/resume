import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  let error = null;
  let profileImage = '';
  try {
    profileImage = useMemo(() => {
      const imgCount = 7;
      const idx = Math.floor(Math.random() * imgCount) + 1;
      return `Vishv_profile${idx}.png`;
    }, []);
  } catch (e) {
    error = e;
  }

  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-40 pb-20 bg-navy-900 text-white w-full px-4 min-h-[80vh]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-2 flex items-center gap-2">
            Hey, there <span className="inline-block">👋</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-sans leading-tight mb-2" style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            <span className="text-gray-300 font-bold">I'm </span>
            <span className="text-blue-400 font-extrabold">Vishv Magarvadia</span>
            <br />
            <span className="text-white font-extrabold">a Student @IITKGP</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-400 font-sans mb-6 max-w-2xl font-medium">
            Currently focused on DSA and building user experiences that drive growth.
          </div>
        </div>
        {/* Right: Profile Image Card with hanger and dedication */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-end relative min-h-[380px] md:min-h-[480px]">
          {/* Hanger string */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20" style={{ width: '2px', background: '#e5e7eb', height: '60px' }} />
          {/* Beige circle accent */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 md:left-auto md:-right-16 md:top-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F6E3CB] z-0" />
          {/* Hanging profile image with swing animation and fall on hover */}
          <motion.div
            className="bg-[#F6E3CB] rounded-3xl shadow-xl p-2 md:p-4 max-w-xs md:max-w-sm z-10 mt-16 relative"
            style={{ 
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
              transformOrigin: 'center',
              backdropFilter: 'blur(8px)'
            }}
            animate={{ 
              y: [0, -8, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
            whileHover={{ 
              scale: 1.02,
              y: -12,
              rotate: 0,
              transition: { 
                type: 'spring',
                stiffness: 100,
                damping: 10
              }
            }}
          >
            {error ? (
              <div className="w-64 h-80 md:w-80 md:h-96 flex items-center justify-center bg-red-200 text-red-700 rounded-2xl font-bold text-xl">
                Error loading image
              </div>
            ) : !imgError ? (
              <img
                src={profileImage}
                alt="Vishv Magarvadia"
                className="rounded-2xl object-cover w-64 h-80 md:w-80 md:h-96 transition-all duration-300 hover:brightness-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-64 h-80 md:w-80 md:h-96 flex items-center justify-center bg-gray-200 text-gray-600 rounded-2xl font-bold text-xl">
                Photo Not Found
              </div>
            )}
          </motion.div>
          {/* Dedication below photo */}
          <div className="mt-6 text-center w-full">
            <span className="block text-2xl md:text-3xl font-extrabold text-blue-200 font-serif tracking-wide fancy-dedication" style={{fontFamily: 'Dancing Script, cursive, serif'}}>
              Dedicated to my DAD!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;