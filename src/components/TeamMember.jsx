import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble, FaInstagram, FaMediumM, FaStackOverflow, FaCodepen } from 'react-icons/fa';
import { SiTrello } from 'react-icons/si';


const TeamMember = ({ member }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'twitter': return <FaTwitter />;
      case 'linkedin': return <FaLinkedinIn />;
      case 'github': return <FaGithub />;
      case 'dribbble': return <FaDribbble />;
      case 'instagram': return <FaInstagram />;
      case 'medium': return <FaMediumM />;
      case 'stackoverflow': return <FaStackOverflow />;
      case 'codepen': return <FaCodepen />;
      case 'trello': return <SiTrello />;
      default: return null;
    }
  };

  return (

  <div className='p-5 bg-gray-300 rounded-lg ' >
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover "
      variants={itemVariants}
    >
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-primary-300">{member.role}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 mb-4">{member.bio}</p>
        
        
{/* social media icons  */}


        {/* <div className="flex space-x-3">
          {Object.entries(member.social).map(([platform, url]) => (
            <a 
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 transition-colors"
              aria-label={`${member.name}'s ${platform}`}
            >
              {getSocialIcon(platform)}
            </a>
          ))}
        </div> */}
      </div>
    </motion.div>
    </div>
  );
};

export default TeamMember;