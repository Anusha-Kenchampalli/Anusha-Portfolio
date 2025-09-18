import React from 'react';
import Button from 'react-bootstrap/Button';
import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">

         
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-74 h-74 lg:w-80 lg:h-80 relative group">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <img
                src="https://res.cloudinary.com/dzpcirnqq/image/upload/v1758178218/Anusha_l595zc.jpg" 
                alt="Your Name"
                className="w-full h-full sm:mt-[30px] object-cover rounded-full shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

       
          <div className="md:w-2/3 text-center md:text-left md:ml-[15%]">
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              &mdash; Hello, I'm <br/> <span className=" text-4xl sm:text-4xl lg:text-5xl text-cyan-400">Anusha Kenchampalli</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-slate-400">
             Computer Science Student | Aspiring Software Developer
            </p>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-slate-300">
              I enjoy creating digital experiences that are both useful and visually appealing. 
              My focus is on writing clean, efficient code and following good development practices. 
              I like combining creativity with technology to design solutions that solve real-world problems. 
              I am passionate about learning new tools and frameworks to improve my skills. Building projects 
              that make a positive impact motivates me the most.
            </p>

            

            <div className="mt-8">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer"
              >
                View My Work
              </Link>
            </div>

             
            <div className="flex space-x-4 mt-5 items-center justify-center md:justify-start md:ml-2">
              <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('https://github.com/Anusha-Kenchampalli', '_blank')}>
               <BiLogoGithub size={25}/>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/in/anusha-kenchampalli', '_blank')}>
                <BiLogoLinkedin size={25}/>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('mailto:kanusha0718@gmail.com', '_blank')}>
               <BiLogoGmail size={25}/>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;