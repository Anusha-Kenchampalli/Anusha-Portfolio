import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Anusha-Kenchampalli' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/anusha-kenchampalli' },
    { icon: <FaEnvelope />, url: 'mailto:kanusha0718@gmail.com' },
  ];

  return (
    <footer className="bg-slate-800/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Anusha Kenchampalli. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;