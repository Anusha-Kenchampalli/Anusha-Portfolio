import React from 'react';

const Education = () => {
  
  const educationData = [
    {
      year: '2024 - 2028',
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'NxtWave Institute of Advance Technologies, Hyderabad',
      details: 'Persuing B.Tech 2nd year by learning Data Structures, Algorithms, Web Development, and Database Management.',
    },
    {
      year: '2021 - 2024', 
      degree: 'Diploma in Web Designing',
      institution: 'St.Marys Grouup of Institutions, Guntur',
      details: 'Completed Diploma with basic knowledge of programming languages like C, C++, Python, and Web Development.',
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary Education',
      institution: 'APSWREIS School, Anantapur',
      details: 'Completed Higher Secondary with a focus on Mathematics, Physics, and Chemistry.',
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Education</h2>
          <p className="mt-4 text-lg text-slate-400">
            
          </p>
        </div>
        <div className="relative max-w-2xl flex flex-col ml-0 sm:flex-col sm:ml-[120px] md:flex-row md:ml-[200px]">
          
          {educationData.map((edu, index) => (
            <div key={index} className="mr-5 flex items-center mb-3 w-full">
    
            
              <div className="order-1 w-[350px] h-[250px] bg-slate-800 rounded-lg shadow-xl px-6 py-4 transition-transform transform hover:scale-105 duration-300">
                <p className="text-sm text-cyan-400">{edu.year}</p>
                <h3 className="mb-2 font-bold text-white text-xl">{edu.degree}</h3>
                <h4 className="mb-3 font-semibold text-slate-300 text-md">{edu.institution}</h4>
                <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100">{edu.details}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;