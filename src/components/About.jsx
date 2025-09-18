import React from 'react';
import { Heart, Target, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "I love creating digital solutions that make a real impact on people's lives."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Always focused on delivering high-quality results that exceed expectations."
    },
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable, and well-documented code."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description: "I enjoy tackling complex challenges with innovative and efficient solutions."
    }
  ];

  return (
    <section id="about-me" className="py-20 bg-slate-800/50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">About Me</h2>
        <p className="mt-4 text-lg text-slate-400">
          A little bit about my journey and passions.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:flex">
    
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-xl p-8 md:mr-3">
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I am a computer science student at NIAT, driven by a strong passion for technology and innovation.
            Currently focused on strengthening my programming foundation through Python, I am keen on expanding
            my expertise in Artificial Intelligence and Web Development. My curiosity and dedication motivate me 
            to explore how emerging technologies can be applied to create smarter, more efficient solutions.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            My goal is to design and develop impactful applications that address real-world challenges while
            enhancing user experience and efficiency. I am eager to collaborate with professionals and peers
            who share my enthusiasm for technology, fostering opportunities for continuous learning, innovation,
            and growth in the ever-evolving tech industry.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon; 
            return (
              <div key={index} className="bg-[#1d293d] p-5 rounded-lg">
                <Icon className="w-8 h-8 text-blue-400 mb-3" /> 
                <h1 className="text-xl font-semibold text-white">
                  {highlight.title}
                </h1>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
