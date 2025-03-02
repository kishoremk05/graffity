// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header 
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//          scrolled ? "bg-black text-white shadow-md py-2" : "bg-transparent py-4"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 h-12 flex justify-between items-center" >
//         <div className="flex items-center">
//           <motion.div
//             className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           </motion.div>
//           <h1 className="text-2xl font-bold text-white"><a href="home">Graffity</a></h1>
//         </div>
//         <nav>
//           <ul className="flex space-x-8">
//             <li><a href="#team" className="text-white hover:text-primary-500 transition-colors font-semibold">Team</a></li>
//             <li><a href="#details" className="text-white hover:text-primary-500 transition-colors font-semibold">About</a></li>
//             <li><a href="#details" className="text-white hover:text-primary-500 transition-colors font-semibold">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
         scrolled ? "bg-black text-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-14">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </motion.div>
          <h1 className="text-2xl font-bold text-white"><a href="home">Graffity</a></h1>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#team" className="text-white hover:text-primary-500 transition-colors font-semibold">Team</a>
          <a href="#details" className="text-white hover:text-primary-500 transition-colors font-semibold">About</a>
          <a href="#contact" className="text-white hover:text-primary-500 transition-colors font-semibold">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-black text-white flex flex-col space-y-4 p-4 absolute top-20 left-0 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#team" className="hover:text-primary-500 transition-colors font-semibold" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#details" className="hover:text-primary-500 transition-colors font-semibold" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors font-semibold" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
