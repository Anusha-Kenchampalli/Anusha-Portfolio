import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaGitAlt, } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript,} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
    { icon: <FaReact className="text-cyan-400" />, name: 'React' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind CSS' },
    { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
    { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
    { icon: <FaPython className="text-yellow-500" />, name: 'Python' },
    { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Skills</h2>
          <p className="mt-4 text-lg text-slate-400">Technologies and tools I work with.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-slate-800 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;