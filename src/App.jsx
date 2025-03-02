import React from 'react';
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import bgImage from "./assets/background.jpg";

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-200 " 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Header />
      <motion.main 
        className="flex-grow container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TeamSection />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
