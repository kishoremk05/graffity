import React from "react";
import TeamMember from "./TeamMember";
import { motion } from "framer-motion";
import kishoreImage from "../assets/kishore.jpg";
import barathImage from "../assets/barath.jpg";
import dhanushImage from "../assets/dhanush.jpg";
import jaisuryaImage from "../assets/jaisurya.jpg";
import adiImage from "../assets/aditya.jpg";
import madhanImage from "../assets/madhan.jpg";
import manojImage from "../assets/manoj.jpg";
import maniImage from "../assets/mani.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Kishore",
    role: "Software Developer",
    bio: "Kishore has experience in website development, specializing in front-end and back-end technologies. He is proficient in building responsive and user-friendly websites, ensuring seamless performance across different devices and browsers.",
    image: kishoreImage,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Jaisurya",
    role: "3D Designer",
    bio: "He is a 3D designer with extensive experience in video editing. His expertise includes creating high-quality 3D models, animations, and visually compelling video content.",
    image: jaisuryaImage,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
    },
  },
  {
    id: 3,
    name: "Barath",
    role: "Software Developer",
    bio: "He has extensive experience in the technical field and is also a skilled React Native developer, proficient in building cross-platform mobile applications with a seamless user experience.",
    image: barathImage,
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      stackoverflow: "https://stackoverflow.com",
    },
  },
  {
    id: 4,
    name: "Madhan Raj",
    role: "IoT Developer",
    bio: "I am highly skilled in IoT-based projects, both hardware and software, and excel at generating innovative ideas.",
    image: madhanImage,
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      medium: "https://medium.com",
    },
  },
  {
    id: 5,
    name: "Aditya",
    role: "Researcher",
    bio: "I am good at English, and I am more interested in space and car mechanics. Let me know if you need any more refinements! 🚀🔧",
    image: adiImage,
    social: {
      github: "https://github.com",
      codepen: "https://codepen.io",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Manoj",
    role: "Data Scientist",
    bio: "Manoj develops strategies to connect our products with the right audiences and is good at data structure.",
    image: manojImage,
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 7,
    name: "Dhanush Kumar",
    role: "UX and Web Developer",
    bio: "He possesses strong skills in both UI/UX design and full-stack web development, ensuring visually appealing and highly functional digital experiences.",
    image: dhanushImage,
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      medium: "https://medium.com",
    },
  },
  {
    id: 8,
    name: "Manikandan",
    role: "Hardware Developer",
    bio: "I am highly skilled in IoT-based projects, both hardware and software, with experience in smart systems and automation. I also excel at generating innovative ideas and optimizing solutions.",
    image: maniImage,
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      trello: "https://trello.com",
    },
  },
];

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="team" className="py-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-cyan-300 mb-4 animate-bounce mx-auto "
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Meet Our Team <br /><span className="animate-ping">🚀</span>
        </motion.h2>
        <motion.p
          className="text-lg text-white max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We're a diverse group of passionate individuals working together to
          create amazing products.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
