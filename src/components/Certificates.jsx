import React from 'react';
import { FaCertificate } from 'react-icons/fa';



const Certificates = () => {
  const certificateData = [
    {
      img : "https://res.cloudinary.com/dzpcirnqq/image/upload/v1756703476/Screenshot_2025-09-01_104057_ddn0jv.png",
      title: 'Microsoft Power BI Data Analyst Associate',
      organization: 'Office Master',
      year: '2025',
    },
    {
      img : "https://res.cloudinary.com/dzpcirnqq/image/upload/v1756703082/UI_UX_Accomplishment_Certificate_go4afy.jpg",
      title: 'UI/UX Design',
      organization: 'NxtWave Institute of Advance Technologies',
      year: '2024',
    },
    {
      img : "https://res.cloudinary.com/dzpcirnqq/image/upload/v1758081308/21_days_accomplishment_cf_akla2w.jpg",
      title: '21 Days Coding Challenge',
      organization: 'NxtWave',
      year: '2024',
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Certificates</h2>
          <p className="mt-4 text-lg text-slate-400">I have successfully completed several certifications that strengthen my technical expertise 
            and showcase my commitment to continuous learning</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.map((cert, index) => (
            
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-x-4 transform hover:bg-slate-700 hover:-translate-y-2 transition-all duration-300"
            >
              
            <img src={cert.img} alt={cert.title} className=" object-cover  border-2 border-cyan-400"/>
              
              <div className='flex'>
                <FaCertificate className="text-yellow-500 text-4xl mt-3 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <p className="text-slate-400">{cert.organization} - {cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;